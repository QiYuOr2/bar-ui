import { App, defineComponent, PropType, ref, watch } from 'vue';
import './index.less';

const Textarea = defineComponent({
  name: 'bar-textarea',
  props: {
    modelValue: String,
    name: { type: String },
    rows: { type: Number, default: 4 },
    cols: { type: Number, default: 20 },
    block: { type: Boolean, default: false },
    placeholder: String,
    disabled: { type: Boolean, default: false },
    hasFail: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    maxlength: { type: Number },
    onInput: Function as PropType<(e: Event) => void>,
    onFocus: Function as PropType<(e: FocusEvent) => void>,
    onBlur: Function as PropType<(e: FocusEvent) => void>,
    onPressEnter: Function as PropType<(e: KeyboardEvent) => void>,
    onKeypress: Function as PropType<(e: KeyboardEvent) => void>,
    onKeydown: Function as PropType<(e: KeyboardEvent) => void>,
    onKeyup: Function as PropType<(e: KeyboardEvent) => void>,
    onChange: Function as PropType<(e: Event) => void>,
  },
  setup(props, { emit }) {
    const value = ref(props.modelValue);
    watch(value, (newValue) => {
      emit('update:modelValue', newValue);
    });
    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue || '';
      }
    );

    const onInput = (e: Event) => {
      value.value = (e.target as HTMLInputElement).value;
      props.onInput?.(e);
    };

    const onKeyup = (e: KeyboardEvent) => {
      props.onKeyup?.(e);
      if (e.key === 'Enter') {
        props.onPressEnter?.(e);
      }
    };

    return () => (
      <div class={['bar-textarea', { block: props.block }]}>
        <textarea
          class={[
            'bar-textarea__inner',
            { fail: props.hasFail, disabled: props.disabled },
          ]}
          placeholder={props.placeholder}
          rows={props.rows}
          cols={props.cols}
          disabled={props.disabled}
          readonly={props.readonly}
          autofocus={props.autofocus}
          maxlength={props.maxlength}
          onInput={onInput}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onKeyup={onKeyup}
          onKeypress={props.onKeypress}
          onKeydown={props.onKeydown}
          onChange={props.onChange}
        >
          {value.value}
        </textarea>
      </div>
    );
  },
});

Textarea.install = (app: App) => {
  app.component(Textarea.name, Textarea);
};

export default Textarea;
