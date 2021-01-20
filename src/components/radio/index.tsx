import { App, defineComponent, inject, PropType, Ref, watch } from 'vue';
import './index.less';

const Radio = defineComponent({
  name: 'bar-radio',
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
    const name = inject<string>('radioName');
    const modelValue = inject<Ref<any>>('radioValue');
    const groupEmit = inject<(event: string, ...args: any[]) => void>(
      'groupEmit'
    );

    const checked = () => {
      if (props.checked) {
        groupEmit && groupEmit('update:modelValue', props.value);
        return true;
      }
      return modelValue?.value === props.value;
    };

    const handleChange = (event: MouseEvent) => {
      groupEmit && groupEmit('update:modelValue', props.value);
      emit('click', { event, value: props.value });
    };

    return () => (
      <div class={['bar-radio', { disabled: props.disabled }]}>
        <label>
          <input
            type="radio"
            name={name}
            value={props.value}
            disabled={props.disabled}
            checked={checked()}
            onClick={handleChange}
          />
          <span class="bar-radio__circle"></span>
          <span class="bar-radio__text">{slots}</span>
        </label>
      </div>
    );
  },
});

Radio.install = (app: App) => {
  app.component(Radio.name, Radio);
};

export default Radio;
