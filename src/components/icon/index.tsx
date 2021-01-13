import { defineComponent, PropType } from 'vue';
import './index.less';

export type IconName = 'loading';
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

    const renderByName = (name: IconName, size: IconSize) => {
      const map = {
        loading: renderLoading(name),
      };

      return map[name](size);
    };

    return () => renderByName(props.name, props.size);
  },
});
