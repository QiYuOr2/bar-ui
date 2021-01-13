import { defineComponent, PropType } from 'vue';
import icon from '../icon';
import './index.less';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'warn'
  | 'danger'
  | 'link'
  | 'text';

export type ButtonSize = 'normal' | 'lg' | 'sm';

export type ButtonShape = 'circle' | 'round';

export default defineComponent({
  name: 'bar-button',
  components: {
    icon,
  },
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
    disabled: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String as PropType<ButtonType>,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event);
    };

    const renderContent = () =>
      props.loading ? (
        <div>
          <icon name="loading" size="sm" />
          <span>{slots}</span>
        </div>
      ) : (
        <div>{slots}</div>
      );

    return () => (
      <button
        class={`bar-button btn-${props.type} btn-${props.size} ${
          props.block ? 'btn-block' : ''
        } ${props.shape ? `btn-${props.shape}` : ''}`}
        onClick={handleClick}
        disabled={props.disabled}
      >
        {renderContent()}
      </button>
    );
  },
});
