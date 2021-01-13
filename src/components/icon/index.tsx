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
      return (size: IconSize) => (
        <svg class={`bar-icon bar-icon-${name} bar-icon-${size}`}>
          {size === 'sm' && <circle class="loading" cx="10" cy="10" r="8" />}
          {size === 'normal' && (
            <circle class="loading" cx="12" cy="12" r="10" />
          )}
          {size === 'lg' && <circle class="loading" cx="17" cy="17" r="15" />}
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
