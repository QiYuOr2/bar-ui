import { App, defineComponent, PropType, ref } from 'vue';
import './index.less';

const Switch = defineComponent({
  name: 'bar-switch',
  props: {
    modelValue: { type: Boolean },
    size: { type: Number, default: 22 },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    onChange: Function as PropType<(state: boolean) => void>,
  },
  setup(props, { emit, slots }) {
    const state = ref(props.modelValue);
    const changeState = () => {
      state.value = !state.value;
      emit('update:modelValue', state.value);
      emit('change', state.value);
    };

    return () => (
      <div class={['bar-switch', { disabled: props.disabled }]}>
        <label class="bar-switch__content">
          {slots.prefix ? (
            <span class="bar-switch__content-prefix">{slots.prefix()}</span>
          ) : (
            ''
          )}
          {slots.suffix ? (
            <span class="bar-switch__content-suffix">{slots.suffix()}</span>
          ) : (
            ''
          )}
          <input
            type="checkbox"
            checked={state.value || props.checked}
            disabled={props.disabled}
            onClick={changeState}
          />
          <span
            class="bar-switch__content-slider"
            style={`width: ${props.size * 2}px;
            height: ${props.size}px;
            border-radius: ${props.size + 100}px`}
          ></span>
        </label>
      </div>
    );
  },
});

Switch.install = (app: App) => {
  app.component(Switch.name, Switch);
};

export default Switch;
