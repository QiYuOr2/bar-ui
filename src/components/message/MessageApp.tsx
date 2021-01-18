import { defineComponent, PropType, TransitionGroup } from 'vue';
import Icon from '../icon';

export type MessageType = 'success' | 'info' | 'warn' | 'error';

export interface MessageOption {
  type?: MessageType;
  content: string;
  duration?: number;
}

export interface MessageConfig extends MessageOption {
  ref: number;
}

export const MessageApp = defineComponent({
  name: 'bar-message',
  props: {
    options: {
      type: Array as PropType<MessageConfig[]>,
      required: true,
    },
  },
  setup(props) {
    const typeToIcon = {
      success: <Icon name="success" size="sm" />,
      info: <Icon name="info" size="sm" />,
      warn: <Icon name="warn" size="sm" />,
      error: <Icon name="error" size="sm" />,
    };

    return () => (
      <TransitionGroup>
        {props.options.map((item) => (
          <div
            key={item.ref}
            class={`bar-message bar-message-${item.type || 'info'}`}
          >
            <div class="bar-message__icon">
              {typeToIcon[item.type || 'info']}
            </div>
            <div class="bar-message__content">{item.content}</div>
          </div>
        ))}
      </TransitionGroup>
    );
  },
});
