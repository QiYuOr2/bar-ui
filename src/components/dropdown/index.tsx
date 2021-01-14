import { defineComponent, ref, PropType, App } from 'vue';
import { Button } from '../';
import { ButtonType } from '../button';
import './index.less';

export type DropdownPosition = 'leftDown' | 'rightDown';

const Dropdown = defineComponent({
  name: 'bar-dropdown',
  components: { Button },
  props: {
    wrapper: {
      type: String,
      default: 'body',
    },
    buttonTitle: {
      type: String,
      default: '',
    },
    buttonShadow: {
      type: Boolean,
      default: true,
    },
    buttonType: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    showIcon: { type: Boolean, default: true },
    dropdownPosition: {
      type: String as PropType<DropdownPosition>,
      default: 'leftDown',
    },
  },
  setup(props, { slots }) {
    const visible = ref(false);

    const renderDropdown = () => {
      return (
        <div
          class={`bar-dropdown-menu bar-dropdown__${props.dropdownPosition.toLowerCase()} ${
            visible.value ? 'show' : ''
          }`}
          onClick={() => (visible.value = false)}
        >
          {slots}
        </div>
      );
    };

    const handleWrapClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        visible.value = false;
      }
    };

    const renderDropdownButton = () => {
      return (
        <Button
          class="bar-dropdown-control"
          type={props.buttonType}
          size="sm"
          {...{ icon: props.showIcon ? (visible.value ? 'up' : 'down') : '' }}
          iconSize="xs"
          iconPosition="right"
          style={!props.buttonShadow ? { boxShadow: 'none' } : {}}
          onClick={() => (visible.value = !visible.value)}
        >
          {props.buttonTitle}
        </Button>
      );
    };

    return () => (
      <div class="bar-dropdown">
        <div
          v-show={visible.value}
          class="bar-dropdown-cloth"
          onClick={handleWrapClick}
        ></div>
        {renderDropdownButton()}
        {renderDropdown()}
      </div>
    );
  },
});

Dropdown.install = (app: App) => {
  app.component(Dropdown.name, Dropdown);
};

export default Dropdown;
