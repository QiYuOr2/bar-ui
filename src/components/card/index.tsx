import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  name: 'bar-card',
  props: {
    title: String,
    titleClass: String,
    footerClass: String,
  },
  emits: ['touchstart', 'touchmove', 'touchcancel'],
  setup(props, { emit, slots }) {
    const renderTitle = () => {
      const title = props.title || '';
      const titleSlot = slots.title ? slots.title() : '';
      return (
        (title || titleSlot) && (
          <div class={`bar-card__title ${props.titleClass || ''}`}>
            {titleSlot || title}
          </div>
        )
      );
    };

    const renderFooter = () => {
      const footerSlot = slots.footer ? slots.footer() : '';
      return (
        footerSlot && (
          <div class={`bar-card__footer ${props.footerClass || ''}`}>
            {footerSlot}
          </div>
        )
      );
    };

    const handleTouchStart = (event: TouchEvent) => {
      emit('touchstart', event);
    };

    const handleTouchMove = (event: TouchEvent) => {
      emit('touchmove', event);
    };

    const handleTouchCancel = (event: TouchEvent) => {
      emit('touchcancel', event);
    };

    return () => (
      <div
        class="bar-card"
        onTouchstart={handleTouchStart}
        onTouchmove={handleTouchMove}
        onTouchcancel={handleTouchCancel}
        onTouchend={handleTouchCancel}
      >
        {renderTitle()}
        <div class="bar-card__content">{slots}</div>
        {renderFooter()}
      </div>
    );
  },
});
