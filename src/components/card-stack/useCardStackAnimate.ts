import { ref, reactive, Ref } from 'vue';
import { CardAnimateEvent, CardData, CardDragDirection, CardStyle } from '.';

type AnimateCardStyle = {
  width: string;
  height: string;
  zIndex: number;
  top?: string | number;
  left?: string | number;
  opacity?: number;
};

function initalCardStyle(
  baseCardStyle: CardStyle,
  numberToStyle: AnimateCardStyle[],
  cardOne: {
    card1Style: Omit<AnimateCardStyle, 'top' | 'left'>;
    top: Ref<number>;
    left: Ref<number>;
  }
) {
  const { top, left } = cardOne;
  const { top: baseTop, left: baseLeft, width, height } = baseCardStyle;

  return numberToStyle.map((style, index) => {
    if (index !== 0) {
      style.width = width - 10 * index + 'px';
      style.height = height - 10 * index + 'px';
      if (style.top) style.top = top.value + 20 * index + 'px';
      if (style.left) style.left = left.value + 5 * index + 'px';
      return { ...style };
    } else {
      top.value = baseTop;
      left.value = baseLeft;

      cardOne.card1Style.width = width + 'px';
      cardOne.card1Style.height = height + 'px';
      return { ...cardOne.card1Style, top: top.value, left: left.value };
    }
  });
}

/**
 * 堆叠卡片飞出特效
 * @param flyDistance 飞行距离
 * @param limitDistance 最短触发飞行的距离
 * @param data 数据
 */
export default function useCardStackAnimate(
  flyDistance: number,
  limitDistance: number,
  dragDirection: CardDragDirection,
  baseCardStyle: CardStyle | undefined,
  data: CardData[] | undefined,
  callbacks: CardAnimateEvent
) {
  const initalCard: CardData = { title: '暂无数据', content: '暂无数据' };

  // 飞出卡片的坐标
  const startLeft = ref(0);
  const startTop = ref(0);
  const left = ref(0);
  const top = ref(0);

  const hasAnimate = ref(false);

  // 卡片显示的数据
  const cardData = ref<CardData[]>(new Array(4).map(() => initalCard));

  // 四张卡片的样式
  const card1Style = reactive({
    width: '300px',
    height: '200px',
    zIndex: 999,
  });
  const card2Style = reactive({
    width: '290px',
    height: '190px',
    zIndex: 998,
    top: '20px',
    left: '5px',
  });
  const card3Style = reactive({
    width: '280px',
    height: '180px',
    zIndex: 997,
    top: '40px',
    left: '10px',
  });
  const card4Style = reactive({
    width: '170px',
    height: '170px',
    zIndex: 996,
    top: '60px',
    left: '15px',
    opacity: 0,
  });
  const numberToStyle: AnimateCardStyle[] = [
    card1Style,
    card2Style,
    card3Style,
    card4Style,
  ];

  let customInitalStyle: AnimateCardStyle[];
  if (baseCardStyle) {
    customInitalStyle = initalCardStyle(baseCardStyle, numberToStyle, {
      card1Style,
      top,
      left,
    });
  } else {
    customInitalStyle = [
      {
        width: card1Style.width,
        height: card1Style.height,
        zIndex: card1Style.zIndex,
        top: top.value,
        left: left.value,
      },
      {
        ...card2Style,
      },
      {
        ...card3Style,
      },
      {
        ...card4Style,
      },
    ];
  }

  // 修改卡片数据
  const changeCardData = (data: CardData[]) => {
    data &&
      data.length < 4 &&
      data.push({ title: '暂无数据', content: '暂无数据' });
    cardData.value = data.slice(0, 4);
  };

  // 初始加载数据
  if (data) {
    changeCardData(data);
  }

  const handleTouchStart = (e: TouchEvent) => {
    const currentTouch = e.touches[0];
    startLeft.value = currentTouch.clientX - left.value;
    startTop.value = currentTouch.clientY - top.value;
    callbacks.handleDragStart();
  };

  const handleTouchMove = (e: TouchEvent) => {
    const currentTouch = e.touches[0];

    // 判断拖拽方向
    if (dragDirection === 'all' || dragDirection === 'horizontal')
      left.value = currentTouch.clientX - startLeft.value;
    if (dragDirection === 'all' || dragDirection === 'vertical')
      top.value = currentTouch.clientY - startTop.value;

    callbacks.handleDragMove({
      top: top.value,
      left: left.value,
      distance: getDistance(0, 0, left.value, top.value),
    });
  };

  const activeCard = (topDistance: number, leftDistance: number) => {
    callbacks.handleFlyStart();
    numberToStyle.forEach((style, index) => {
      if (index === 0) {
        top.value = topDistance;
        left.value = leftDistance;
        return;
      }

      style.width = customInitalStyle[index - 1].width;
      style.height = customInitalStyle[index - 1].height;
      style.top = customInitalStyle[index - 1].top as string;
      style.left = customInitalStyle[index - 1].left as string;

      if (index === 1) {
        style.top = customInitalStyle[index - 1].top + 'px';
        style.left = customInitalStyle[index - 1].left + 'px';
      }

      if (index === 3) {
        style.opacity = 1;
      }
    });
  };

  const animateEnd = () => {
    if (data) {
      data = data.slice(1);
      changeCardData(data);
      callbacks.handleFlyDone();
    }
  };

  const resetCard = () => {
    hasAnimate.value = false;
    numberToStyle.forEach((style, index) => {
      if (index === 0) {
        top.value = customInitalStyle[index].top as number;
        left.value = customInitalStyle[index].left as number;
        return;
      }

      style.width = customInitalStyle[index].width;
      style.height = customInitalStyle[index].height;
      style.top = customInitalStyle[index].top as string;
      style.left = customInitalStyle[index].left as string;
      if (index === 3) {
        style.opacity = 0;
      }
    });

    animateEnd();
  };

  const handleTouchCancel = (e: TouchEvent) => {
    hasAnimate.value = true;
    const distance = getDistance(0, 0, left.value, top.value);

    callbacks.handleDragStop({ left: left.value, top: top.value, distance });

    if (distance < limitDistance) {
      left.value = 0;
      top.value = 0;
      setTimeout(() => {
        hasAnimate.value = false;
        callbacks.handleFlyFail();
      }, 400);
      return;
    }
    const angle = Math.atan2(top.value - 0, left.value - 0);
    activeCard(Math.sin(angle) * flyDistance, Math.cos(angle) * flyDistance);

    setTimeout(resetCard, 400);
  };

  // 计算移动距离
  const getDistance = (
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) => {
    const x = Math.abs(startX - endX);
    const y = Math.abs(startY - endY);
    return Math.sqrt(x ** 2 + y ** 2);
  };

  return {
    numberToStyle,
    handleTouchStart,
    handleTouchMove,
    handleTouchCancel,
    hasAnimate,
    cardData,
    left,
    top,
  };
}
