import { App, defineComponent, PropType, provide, ref, watch } from 'vue';
import './index.less';

const CheckboxGroup = defineComponent({
  name: 'bar-checkbox-group',
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

    provide('checkboxValue', value);
    provide('checkboxName', props.name);
    provide('checkboxGroupEmit', emit);

    return () => (
      <div
        class={[
          'bar-checkbox-group',
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

CheckboxGroup.install = (app: App) => {
  app.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;
