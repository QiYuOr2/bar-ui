/**
 * 自定义折叠面板的transition动画
 */

import { RendererElement } from 'vue';

const transitionStyle = '0.3s height ease';
export default {
  beforeEnter(el: RendererElement) {
    el.style.transition = transitionStyle;

    el.style.height = 0;
  },

  enter(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = '';
    }
    el.style.overflow = 'hidden';
  },

  afterEnter(el: RendererElement) {
    el.style.transition = '';
    el.style.height = '';
  },

  beforeLeave(el: RendererElement) {
    el.style.display = 'block';
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },

  leave(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.transition = transitionStyle;
      el.style.height = 0;
    }
  },

  afterLeave(el: RendererElement) {
    el.style.transition = '';
    el.style.height = '';
  },
};
