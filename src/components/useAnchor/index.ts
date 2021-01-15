/**
 * 锚点API
 *
 * 参考: https://juejin.cn/post/6844903940539023367
 */
import { onMounted, onUnmounted, ref } from 'vue';

/**
 * 锚点
 * @param selector 打下的锚点
 * @param listenContainer 监听滚动的容器
 * @param offset 滚动偏移量
 * @returns active 现在在第几个锚点
 * @returns scrollTo 滚动到第几个锚点
 */
export default function useAnchor(
  selector: string,
  listenContainer: HTMLElement,
  offset: number
) {
  const active = ref(0);
  const onScroll = () => {
    const anchors = document.querySelectorAll(selector);
    const offsetTopArr: any[] = [];
    anchors.forEach((item) => {
      offsetTopArr.push((item as HTMLElement).offsetTop);
    });
    const scrollTop = listenContainer.scrollTop - offset + 10;
    let anchorIndex = 0;
    for (let n = 0; n < offsetTopArr.length; n++) {
      if (scrollTop >= offsetTopArr[n]) {
        anchorIndex = n;
      }
    }
    active.value = anchorIndex;
  };

  onMounted(() => {
    listenContainer.addEventListener('scroll', onScroll, false);
  });
  onUnmounted(() => {
    listenContainer.removeEventListener('scroll', onScroll);
  });

  const getStep = (target: number, current: number) => {
    const step = Math.abs((current - target) / 10);
    return step > 1 ? step : 1;
  };

  const scrollTo = (index: number) => {
    function smoothDown() {
      if (scrollTop < targetOffsetTop) {
        const step = getStep(targetOffsetTop, scrollTop);
        if (targetOffsetTop - scrollTop >= step) {
          scrollTop += step;
        } else {
          scrollTop = targetOffsetTop;
        }
        listenContainer.scrollTop = scrollTop;

        requestAnimationFrame(smoothDown);
      }
    }
    function smoothUp() {
      if (scrollTop > targetOffsetTop) {
        const step = getStep(targetOffsetTop, scrollTop);
        if (scrollTop - targetOffsetTop >= step) {
          scrollTop -= step;
        } else {
          scrollTop = targetOffsetTop;
        }
        listenContainer.scrollTop = scrollTop;
        requestAnimationFrame(smoothUp);
      }
    }

    const targetOffsetTop =
      (document.querySelector(
        `${selector}:nth-child(${index + 1})`
      ) as HTMLElement).offsetTop + offset;
    let scrollTop = listenContainer.scrollTop;

    if (scrollTop > targetOffsetTop) {
      smoothUp();
    } else {
      smoothDown();
    }
  };
  return { active, scrollTo };
}
