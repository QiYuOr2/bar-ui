import { App, defineComponent, PropType, provide, ref, watch } from 'vue';
import './index.less';

const RadioGroup = defineComponent({
  name: 'bar-radio-group',
  props: {
    name: { type: String, required: true },
    modelValue: null,
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    onChange: Function as PropType<(value: unknown) => void>,
  },
  setup(props, { emit, slots }) {
    const value = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newVal) => {
        value.value = newVal;
        emit('change', newVal);
      }
    );

    provide('radioValue', value);
    provide('radioName', props.name);
    provide('groupEmit', emit);

    return () => (
      <div
        class={[
          'bar-radio-group',
          {
            vertical: props.mode === 'vertical',
          },
        ]}
      >
        {slots}
      </div>
    );
  },
});

RadioGroup.install = (app: App) => {
  app.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;
