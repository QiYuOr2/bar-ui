import { defineComponent, PropType } from 'vue';
import './index.less';

export type TextPosition = 'left' | 'right';

export type DividerType = 'horizontal' | 'vertical';

export default defineComponent({
  name: 'bar-divider',
  props: {
    position: String as PropType<TextPosition>,
    textClass: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<DividerType>,
      default: 'horizontal',
    },
  },
  setup(props, { slots }) {
    const renderDivider = () => {
      if (props.type === 'vertical')
        return <div class="bar-divider bar-divider-vertical"></div>;

      if (slots.default) {
        return (
          <div
            class={`bar-divider has-text ${
              props.position ? `text-${props.position}` : ''
            }`}
          >
            <span class={`bar-divider__text ${props.textClass}`}>{slots}</span>
          </div>
        );
      }

      return <div class="bar-divider"></div>;
    };

    return () => renderDivider();
  },
});
