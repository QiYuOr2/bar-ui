import { App, defineComponent, PropType } from 'vue';
import icon, { IconName, IconSize } from '../icon';
import './index.less';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warn'
  | 'danger'
  | 'link'
  | 'text';

export type ButtonSize = 'normal' | 'lg' | 'sm';

export type ButtonShape = 'circle' | 'round';

export type IconPosition = 'left' | 'right';

const Button = defineComponent({
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
    icon: String,
    iconPosition: {
      type: String as PropType<IconPosition>,
      default: 'left',
    },
    iconSize: { type: String as PropType<IconSize>, default: 'sm' },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
  setup(props, { emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event);
    };

    const renderContent = () => {
      if (props.icon) {
        return (
          <div
            class={`btn-icon-${props.iconPosition} btn-icon-${props.iconSize}`}
          >
            {slots.icon ? (
              slots.icon()
            ) : (
              <icon name={props.icon} size={props.iconSize} />
            )}
            <span>{slots}</span>
          </div>
        );
      }

      if (props.loading) {
        return (
          <div>
            <icon name="loading" size="sm" />
            <span>{slots}</span>
          </div>
        );
      }
      return <div>{slots}</div>;
    };

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

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export default Button;
