import { defineComponent, ref, PropType, App } from 'vue';
import Button from '../button';
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
    onOpen: Function as PropType<(event: MouseEvent) => void>,
    onClose: Function as PropType<(event: MouseEvent) => void>,
  },
  setup(props, { emit, slots }) {
    const visible = ref(false);

    const handleOpen = (event: MouseEvent) => emit('open', event);
    const handleClose = (event: MouseEvent) => emit('close', event);

    const renderDropdown = () => {
      return (
        <div
          class={`bar-dropdown-menu bar-dropdown__${props.dropdownPosition.toLowerCase()} ${
            visible.value ? 'show' : ''
          }`}
          onClick={() => (visible.value = false)}
        >
          <div>{slots}</div>
        </div>
      );
    };

    const handleWrapClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        visible.value = false;
        handleClose(event);
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
          onClick={(e) => {
            visible.value = !visible.value;
            visible.value ? handleOpen(e) : handleClose(e);
          }}
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
