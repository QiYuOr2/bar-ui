import { App, defineComponent, PropType } from 'vue';
import Icon from '../icon';
import { IconName } from '../icon';
import './index.less';

export type ItemType = 'default' | 'menu' | 'dropdown';

const Item = defineComponent({
  name: 'bar-item',
  components: { Icon },
  props: {
    type: { type: String, default: 'default' },
    icon: String as PropType<IconName>,
  },
  setup(props, { slots }) {
    const renderItem = () => {
      if (props.type === 'default')
        return <div class={`bar-item bar-item-${props.type}`}>{slots}</div>;
      if (props.type === 'dropdown')
        return (
          <div class={`bar-item bar-item-${props.type}`}>
            {slots.icon
              ? slots.icon()
              : props.icon && <Icon name={props.icon} size="sm" />}
            <span>{slots}</span>
          </div>
        );
    };

    return () => renderItem();
  },
});

Item.install = (app: App) => {
  app.component(Item.name, Item);
};

export default Item;
