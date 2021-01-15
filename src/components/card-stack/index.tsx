import { PropType, defineComponent } from 'vue';
import numberToLetter from '../utils/numberToLetter';
import Card from '../card';
import useCardStackAnimate from './useCardStackAnimate';
import './index.less';

export type CardData = {
  title?: string;
  content: string;
};

export type CardDragDirection = 'all' | 'horizontal' | 'vertical';

export type CardPosition = {
  left: number;
  top: number;
  distance: number;
};

export type CardAnimateEvent = {
  handleDragStart: () => void;
  handleDragStop: (finishPosition: CardPosition) => void;
  handleDragMove: (movingPosision: CardPosition) => void;
  handleFlyFail: () => void;
  handleFlyStart: () => void;
  handleFlyDone: () => void;
};

export type CardStyle = {
  width: number;
  height: number;
  top: number;
  left: number;
};

const CardStack = defineComponent({
  name: 'bar-card-stack',
  components: {
    Card,
  },
  props: {
    data: {} as PropType<CardData[]>,
    flyDistance: { type: Number, default: 1000 },
    limitDistance: { type: Number, default: 100 },
    dragDirection: {
      type: String as PropType<CardDragDirection>,
      default: 'all',
    },
    baseCardStyle: {} as PropType<CardStyle>,
  },
  emits: [
    'dragStart',
    'dragStop',
    'dragMove',
    'flyFail',
    'flyStart',
    'flyDone',
  ],
  setup(props, { emit, slots }) {
    const { flyDistance, limitDistance, dragDirection, baseCardStyle } = props;
    let { data } = props;

    const handleDragStart = () => {
      emit('dragStart');
    };
    const handleDragStop = (finishPosition: CardPosition) => {
      emit('dragStop', finishPosition);
    };
    const handleDragMove = (movingPosision: CardPosition) => {
      emit('dragMove', movingPosision);
    };
    const handleFlyFail = () => {
      emit('flyFail');
    };
    const handleFlyStart = () => {
      emit('flyStart');
    };
    const handleFlyDone = () => {
      emit('flyDone');
    };

    const {
      numberToStyle,
      handleTouchStart,
      handleTouchMove,
      handleTouchCancel,
      hasAnimate,
      cardData,
      left,
      top,
    } = useCardStackAnimate(
      flyDistance,
      limitDistance,
      dragDirection,
      baseCardStyle,
      data,
      {
        handleDragStart,
        handleDragStop,
        handleDragMove,
        handleFlyFail,
        handleFlyStart,
        handleFlyDone,
      }
    );

    // 需要给第一张卡片加上拖拽动画
    const eventListenerInit = (index: number) =>
      index === 0
        ? {
            ontouchstart: handleTouchStart,
            ontouchmove: handleTouchMove,
            ontouchcancel: handleTouchCancel,
            ontouchend: handleTouchCancel,
          }
        : {};

    const styleInit = (index: number) =>
      index === 0
        ? {
            ...numberToStyle[index],
            top: top.value + 'px',
            left: left.value + 'px',
          }
        : { ...numberToStyle[index] };

    return () => (
      <div class="bar-card-stack">
        {cardData.value.map((card, index) => (
          <Card
            v-slots={{
              footer: slots['footer'],
              title: slots['title'],
            }}
            class={`card-${numberToLetter[index + 1]}  ${
              hasAnimate.value ? 'fly-animate' : ''
            }`}
            title={card.title}
            style={styleInit(index)}
            {...eventListenerInit(index)}
          >
            {card.content}
          </Card>
        ))}
      </div>
    );
  },
});

export default CardStack;
