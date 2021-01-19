import { createApp, ref } from 'vue';
import Icon from '../icon';
import Modal, { ModalType } from '../modal';
import './index.less';

export type DialogOptions = {
  title?: string;
  content: string;
  onOk?: (event: MouseEvent) => void;
  onCancel?: (event: MouseEvent) => void;
  okText?: string;
  cancelText?: string;
  type: ModalType;
};

export type DialogType = 'success' | 'warn' | 'error';

function createDialog(options: DialogOptions, type?: DialogType) {
  createApp({
    setup() {
      const visible = ref(true);

      const handleCancel = (event: MouseEvent) => {
        visible.value = false;
        options.onCancel && options.onCancel(event);
      };

      const handleOk = (event: MouseEvent) => {
        visible.value = false;
        options.onOk && options.onOk(event);
      };

      return () => (
        <Modal
          modelValue={visible.value}
          type={options.type}
          title={options.title}
          onCancel={handleCancel}
          onOk={handleOk}
        >
          <div class={`bar-dialog__content dialog-${type ?? ''}`}>
            {type && <Icon name={type} />}
            {options.content}
          </div>
        </Modal>
      );
    },
  }).mount(document.createElement('div'));
}

export default {
  show: (options: DialogOptions) => {
    createDialog({ ...options, type: 'default' });
  },
  notice: (options: DialogOptions) => {
    createDialog({ ...options, type: 'notice' });
  },
  success: (options: DialogOptions) => {
    createDialog({ ...options, type: 'notice' }, 'success');
  },
  warn: (options: DialogOptions) => {
    createDialog({ ...options, type: 'notice' }, 'warn');
  },
  danger: (options: DialogOptions) => {
    createDialog({ ...options, type: 'notice' }, 'error');
  },
};
