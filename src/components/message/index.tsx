import { ComponentPublicInstance, createApp, ref, Teleport } from 'vue';
import {
  Message as MessageApp,
  MessageConfig,
  MessageOption,
  MessageType,
} from './message';
import './index.less';

const DURING = 2500;
let messageWrapper: ComponentPublicInstance<any> = null;
let seed = 1;

function createMessage(option: MessageOption) {
  if (!messageWrapper) {
    messageWrapper = createApp({
      setup() {
        const messageList = ref<MessageConfig[]>([]);

        const appendOption = (config: MessageConfig) => {
          messageList.value.push(config);
        };

        const removeOption = (config: MessageConfig) => {
          messageList.value = messageList.value.filter(
            (item: MessageConfig) => item.ref !== config.ref
          );
        };

        return {
          messageList,
          appendOption,
          removeOption,
        };
      },
      render() {
        return (
          <Teleport to="body">
            <div class="bar-message-wrapper">
              <MessageApp options={this.messageList} />
            </div>
          </Teleport>
        );
      },
    }).mount(document.createElement('div'));
  }
  const currentSeed = seed++;
  const config = {
    ...option,
    ref: currentSeed,
  };
  messageWrapper.appendOption(config);
  setTimeout(() => {
    messageWrapper.removeOption(config);
  }, option.duration || DURING);
}

function createIfJustText(text: string, type: MessageType) {
  createMessage({
    content: text,
    type,
  });
}

export default {
  info: (option: MessageOption | string) => {
    if (typeof option === 'string') createIfJustText(option, 'info');
    else createMessage({ ...option, type: 'info' });
  },
  success: (option: MessageOption | string) => {
    if (typeof option === 'string') createIfJustText(option, 'success');
    else createMessage({ ...option, type: 'success' });
  },
  warn: (option: MessageOption | string) => {
    if (typeof option === 'string') createIfJustText(option, 'warn');
    else createMessage({ ...option, type: 'warn' });
  },
  error: (option: MessageOption | string) => {
    if (typeof option === 'string') createIfJustText(option, 'error');
    else createMessage({ ...option, type: 'error' });
  },
};
