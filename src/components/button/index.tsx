import { defineComponent, PropType } from 'vue';
import './index.less';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'warn'
  | 'danger'
  | 'link'
  | 'text';

export type ButtonSize = 'normal' | 'lg' | 'sm';

export default defineComponent({
  name: 'bar-button',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'normal',
    },
    block: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => (
      <button
        class={`bar-button btn-${props.type} btn-${props.size} ${
          props.block ? 'btn-block' : ''
        }`}
        onClick={handleClick}
      >
        {slots}
      </button>
    );
  },
});
