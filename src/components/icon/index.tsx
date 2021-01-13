import { defineComponent, PropType } from 'vue';
import './index.less';

export type IconName = 'loading' | 'left';
export type IconSize = 'normal' | 'sm' | 'lg';

export default defineComponent({
  name: 'bar-icon',
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'normal',
    },
  },
  setup(props) {
    const renderLoading = (name: IconName) => {
      const loadingAnimate = (
        strokeDashArray = '1,200;150,200;100,200',
        strokeDashOffset = '0;-10;-100'
      ) => (
        <>
          <animate
            attributeName="stroke-dasharray"
            values={strokeDashArray}
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values={strokeDashOffset}
            dur="1.5s"
            repeatCount="indefinite"
          />
        </>
      );
      return (size: IconSize) => (
        <svg class={`bar-icon bar-icon-${name} bar-icon-${size}`}>
          {size === 'sm' && (
            <circle class="loading" cx="9" cy="9" r="7" stroke-width="2">
              {loadingAnimate('1,200;80,200;80,200', '0;-10;-40')}
            </circle>
          )}
          {size === 'normal' && (
            <circle class="loading" cx="12" cy="12" r="10" stroke-width="3">
              {loadingAnimate()}
            </circle>
          )}
          {size === 'lg' && (
            <circle class="loading" cx="17" cy="17" r="15" stroke-width="3">
              {loadingAnimate()}
            </circle>
          )}
        </svg>
      );
    };

    const renderLeft = () => {
      return (size: IconSize) => (
        <svg
          class={`bar-icon bar-icon-${size}`}
          viewBox="64 64 896 896"
          fill="currentColor"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      );
    };

    const renderByName = (name: IconName, size: IconSize) => {
      const map = {
        loading: renderLoading(name),
        left: renderLeft(),
      };

      return map[name](size);
    };

    return () => renderByName(props.name, props.size);
  },
});
