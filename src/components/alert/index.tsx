import { App, defineComponent, PropType, ref, Transition, watch } from 'vue';
import Icon from '../icon';
import './index.less';

export type AlertType = 'success' | 'info' | 'danger' | 'warn';

const Alert = defineComponent({
  name: 'bar-alert',
  props: {
    modelValue: Boolean,
    type: { type: String as PropType<AlertType>, default: 'info' },
    closable: { type: Boolean, default: true },
  },
  setup(props, { emit, slots }) {
    const visible = ref(props.modelValue || true);
    watch(visible, (newValue) => {
      emit('update:modelValue', newValue);
    });
    watch(
      () => props.modelValue,
      (newValue) => {
        visible.value = newValue;
      }
    );

    return () => (
      <Transition name="alert">
        {visible.value && (
          <div class={`bar-alert bar-alert-${props.type}`}>
            <span class="bar-alert__content">{slots}</span>
            {props.closable && (
              <span
                class="bar-alert__close"
                onClick={() => (visible.value = false)}
              >
                <Icon name="close" size="xs" />
              </span>
            )}
          </div>
        )}
      </Transition>
    );
  },
});

Alert.install = (app: App) => {
  app.component(Alert.name, Alert);
};

export default Alert;
