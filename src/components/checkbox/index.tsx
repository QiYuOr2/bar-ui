import { App, defineComponent, inject, PropType, ref, Ref } from 'vue';
import './index.less';

const Checkbox = defineComponent({
  name: 'bar-checkbox',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    onClick: Function as PropType<
      ({ event, value }: { event: MouseEvent; value: string | number }) => void
    >,
  },
  setup(props, { emit, slots }) {
    const name = inject<string>('checkboxName');
    const modelValue = inject<Ref<any[]>>('checkboxValue');
    const groupEmit = inject<(event: string, ...args: any[]) => void>(
      'checkboxGroupEmit'
    );

    const checked = () => {
      if (props.checked) {
        modelValue?.value && modelValue?.value.push(props.value);
        groupEmit && groupEmit('update:modelValue', modelValue?.value);
        return true;
      }

      return modelValue?.value
        ? modelValue?.value.some((item) => item === props.value)
        : false;
    };

    const handleChange = (event: MouseEvent) => {
      if (modelValue?.value) {
        if (modelValue?.value.includes(props.value)) {
          modelValue.value.splice(
            modelValue.value.findIndex((item) => item === props.value),
            1
          );
        } else {
          modelValue?.value && modelValue?.value.push(props.value);
        }
        groupEmit && groupEmit('update:modelValue', modelValue?.value);
      }

      emit('click', { event, value: props.value });
    };

    return () => (
      <div class={['bar-checkbox', { disabled: props.disabled }]}>
        <label>
          <input
            type="checkbox"
            name={name}
            value={props.value}
            disabled={props.disabled}
            checked={checked()}
            onClick={handleChange}
          />
          <span class="bar-checkbox__block"></span>
          <span class="bar-checkbox__text">{slots}</span>
        </label>
      </div>
    );
  },
});

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox);
};

export default Checkbox;
