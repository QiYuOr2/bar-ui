import {
  App,
  computed,
  defineComponent,
  PropType,
  ref,
  Teleport,
  Transition,
} from 'vue';
import Button from '../button';
import Icon from '../icon';
import './index.less';

export type ModalType = 'default' | 'notice';

const Modal = defineComponent({
  name: 'bar-modal',
  props: {
    type: { type: String as PropType<ModalType>, default: 'default' },
    modelValue: { type: Boolean, default: false },
    title: String,
    showMask: { type: Boolean, default: true },
    showClose: { type: Boolean, default: true },
    cancelText: String,
    okText: String,
    onClose: Function as PropType<(event: MouseEvent) => void>,
    onCancel: Function as PropType<(event: MouseEvent) => void>,
    onOk: Function as PropType<(event: MouseEvent) => void>,
  },
  setup(props, { emit, slots }) {
    const isBeforeDisappear = ref(false);
    const isShowWrapper = computed(() => {
      return props.modelValue || isBeforeDisappear.value;
    });

    const handleClose = (event: MouseEvent) => {
      emit('close', event);
      emit('update:modelValue', false);
    };

    const handleMashClick = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        emit('close', event);
        emit('update:modelValue', false);
      }
    };

    const handleCancel = (event: MouseEvent) => {
      emit('cancel', event);
      emit('update:modelValue', false);
    };

    const handleOk = (event: MouseEvent) => {
      emit('ok', event);
      emit('update:modelValue', false);
    };

    const renderTitle = (type: ModalType) =>
      slots.title ? (
        slots.title()
      ) : (
        <div class="bar-modal__title">
          <span class="text">{props.title}</span>
          {type !== 'notice' && props.showClose && (
            <span onClick={handleClose}>
              <Icon name="close" size="sm" />
            </span>
          )}
        </div>
      );

    const renderFooter = (type: ModalType) => {
      if (type === 'default')
        return slots.footer ? (
          slots.footer()
        ) : (
          <div class="bar-modal__footer">
            <Button size="sm" onClick={handleCancel}>
              {props.cancelText || '取消'}
            </Button>
            <Button type="primary" size="sm" onClick={handleOk}>
              {props.okText || '确认'}
            </Button>
          </div>
        );

      if (type === 'notice')
        return slots.footer ? (
          slots.footer()
        ) : (
          <div class="bar-modal__footer notice">
            <Button type="text" size="lg" onClick={handleOk}>
              {props.okText || '确认'}
            </Button>
          </div>
        );
    };

    const renderType = () =>
      props.modelValue && (
        <div class={`bar-modal ${props.showMask ? '' : 'no-mask'}`}>
          {renderTitle(props.type)}
          <div class={`bar-modal__content ${props.type}`}>
            <p>{slots}</p>
          </div>
          {renderFooter(props.type)}
        </div>
      );

    return () => (
      <Teleport to="body" disabled={!isShowWrapper.value}>
        {props.modelValue && props.showMask && (
          <div class="bar-modal-mask" onClick={handleMashClick}></div>
        )}
        <div
          class="bar-modal-wrapper"
          onClick={handleMashClick}
          style={{ display: isShowWrapper.value ? 'block' : 'none' }}
        >
          <Transition
            name="bar-modal"
            appear
            onBeforeLeave={() => {
              isBeforeDisappear.value = true;
            }}
            onAfterLeave={() => {
              isBeforeDisappear.value = false;
            }}
          >
            {renderType()}
          </Transition>
        </div>
      </Teleport>
    );
  },
});

Modal.install = (app: App) => {
  app.component(Modal.name, Modal);
};

export default Modal;
