import { App, defineComponent, PropType, ref } from 'vue';
import Collapse from '../collapse';
import Panel from '../collapse/panel';
import Icon, { IconName } from '../icon';

import './index.less';

export type SidebarItem = {
  label: string;
  name: string | number;
  icon?: IconName;
  subItems?: SidebarItem[];
  onClick?: (event: MouseEvent) => void;
};

const Sidebar = defineComponent({
  name: 'bar-sidebar',
  props: {
    modelValue: [String, Number],
    value: { type: Array as PropType<SidebarItem[]>, required: true },
    accordion: { type: Boolean, default: false },
    onChange: Function as PropType<() => void>,
    header: String,
    footer: String,
  },
  setup(props, { emit, slots }) {
    const activeKey = ref(props.modelValue || '');

    const renderIcon = (icon: IconName | undefined) =>
      icon && <Icon class="bar-sidebar-item-icon" name={icon} size="sm" />;

    const renderItem = (items: SidebarItem[]) => {
      const handleItemClick = (
        name: string | number,
        onClick: ((e: MouseEvent) => void) | undefined
      ) => {
        return (event: MouseEvent) => {
          activeKey.value = name;
          emit('update:modelValue', name);
          onClick && onClick(event);
        };
      };

      return (
        <Collapse class="bar-sidebar-collapse" accordion={props.accordion}>
          {items.map((item, index) => {
            if (item.subItems) {
              return (
                <div class="bar-sidebar-panel-wrapper">
                  <Panel
                    class="bar-sidebar-panel"
                    index={item.name}
                    onOpen={handleItemClick(item.name, item.onClick)}
                    onClose={handleItemClick(item.name, item.onClick)}
                  >
                    {{
                      default: () => [
                        item.subItems && renderItem(item.subItems),
                      ],
                      title: () => [
                        <div style="display: contents">
                          {renderIcon(item.icon)}
                          <p>{item.label}</p>
                        </div>,
                      ],
                    }}
                  </Panel>
                </div>
              );
            }
            return (
              <div
                class={[
                  'bar-sidebar-item',
                  { active: item.name === activeKey.value },
                ]}
                onClick={handleItemClick(item.name, item.onClick)}
                key={index}
              >
                {renderIcon(item.icon)}
                {item.label}
              </div>
            );
          })}
        </Collapse>
      );
    };

    const renderHeader = () =>
      slots.header ? (
        <div class="bar-sidebar__header">{slots.header()}</div>
      ) : (
        props.header && <div class="bar-sidebar__header">{props.header}</div>
      );

    const renderFooter = () =>
      slots.footer ? (
        <div class="bar-sidebar__footer">{slots.footer()}</div>
      ) : (
        props.footer && <div class="bar-sidebar__footer">{props.footer}</div>
      );

    return () => (
      <div class="bar-sidebar">
        {renderHeader()}
        {renderItem(props.value)}
        {renderFooter()}
      </div>
    );
  },
});

Sidebar.install = (app: App) => {
  app.component(Sidebar.name, Sidebar);
};

export default Sidebar;
