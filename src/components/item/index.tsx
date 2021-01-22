import { App, defineComponent, inject, PropType, Ref } from 'vue';
import Icon from '../icon';
import { IconName } from '../icon';
import './index.less';

export type ItemType = 'default' | 'menu' | 'dropdown' | 'select' | 'tabbar';

const Item = defineComponent({
  name: 'bar-item',
  components: { Icon },
  props: {
    type: { type: String, default: 'default' },
    icon: String as PropType<IconName>,
    onClick: Function as PropType<(event: MouseEvent) => void>,
    name: String,
    dot: { type: Boolean, default: false },
    badge: { type: Number, default: 0 },
  },
  setup(props, { emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event);
    };

    const renderItem = () => {
      if (props.type === 'default')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            {slots}
          </div>
        );
      if (props.type === 'dropdown')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            {slots.icon
              ? slots.icon()
              : props.icon && <Icon name={props.icon} size="sm" />}
            <span>{slots}</span>
          </div>
        );

      if (props.type === 'select')
        return (
          <div class={`bar-item bar-item-${props.type}`} onClick={handleClick}>
            <span>{slots}</span>
          </div>
        );

      if (props.type === 'tabbar') {
        const changeActive = inject<(name: string) => void>('changeActive');
        if (changeActive === undefined) {
          console.warn('item cannot get changeActive');
        }
        const activeName = inject<Ref<string>>('activeName');

        const handleClick = (e: MouseEvent) => {
          if (props.name) {
            changeActive && changeActive(props.name);
          } else {
            console.warn('item must have a name');
          }
          emit('click', e);
        };

        return (
          <div
            class={`bar-item bar-item-${props.type} ${
              activeName?.value === props.name ? 'active' : ''
            }`}
            onClick={handleClick}
          >
            <span class="bar-item-icon">
              {slots.icon
                ? slots.icon()
                : props.icon && <Icon name={props.icon} size="sm" />}
              {props.badge > 0 && <i class="bar-item-badge">{props.badge}</i>}
              {props.dot && <i class="bar-item-badge dot"></i>}
            </span>
            <span>{slots}</span>
          </div>
        );
      }
    };

    return () => renderItem();
  },
});

Item.install = (app: App) => {
  app.component(Item.name, Item);
};

export default Item;
