import {
  App,
  defineComponent,
  InputHTMLAttributes,
  PropType,
  ref,
  watch,
} from 'vue';
import Icon, { IconName } from '../icon';
import './index.less';

const Input = defineComponent({
  name: 'bar-input',
  props: {
    modelValue: [String, Number],
    placeholder: String,
    name: String,
    type: {
      type: String as PropType<InputHTMLAttributes['type']>,
      default: 'text',
    },
    inline: { type: Boolean, default: false },
    hasFail: { type: Boolean, default: false },
    disabled: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    maxlength: [String, Number],
    onFocus: Function as PropType<(e: FocusEvent) => void>,
    onBlur: Function as PropType<(e: FocusEvent) => void>,
    onPressEnter: Function as PropType<(e: KeyboardEvent) => void>,
    onKeypress: Function as PropType<(e: KeyboardEvent) => void>,
    onKeydown: Function as PropType<(e: KeyboardEvent) => void>,
    onKeyup: Function as PropType<(e: KeyboardEvent) => void>,
    onChange: Function as PropType<(e: Event) => void>,
    onInput: Function as PropType<(e: Event) => void>,
    prefixIcon: String as PropType<IconName>,
    suffixIcon: String as PropType<IconName>,
    prefixClass: String,
    suffixClass: String,
    onSuffixClick: Function as PropType<(e: MouseEvent) => void>,
  },
  setup(props, { emit, slots }) {
    const value = ref(props.modelValue);
    watch(value, (newValue) => {
      emit('update:modelValue', newValue);
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
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

    const input = () => (
      <input
        type={props.type}
        value={value.value}
        class={[
          'bar-input__inner',
          {
            inline: props.inline,
            fail: props.hasFail,
            disabled: props.disabled,
            'has-prefix-icon': props.prefixIcon,
            'has-suffix-icon': props.suffixIcon,
          },
        ]}
        maxlength={props.maxlength ? +props.maxlength : undefined}
        placeholder={props.placeholder}
        name={props.name}
        autofocus={props.autofocus}
        disabled={props.disabled}
        readonly={props.readonly}
        onInput={onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyup={onKeyup}
        onKeypress={props.onKeypress}
        onKeydown={props.onKeydown}
        onChange={props.onChange}
      />
    );

    return () => (
      <div
        class={[
          'bar-input',
          {
            'is-inline': props.inline,
            'has-prefix': slots.prefix,
            'has-suffix': slots.suffix,
          },
        ]}
      >
        {props.prefixIcon && (
          <div class={`bar-input__prefix ${props.prefixClass ?? ''}`}>
            <Icon name={props.prefixIcon} />
          </div>
        )}
        {slots.prefix && (
          <div class={`bar-input__prefix-content ${props.prefixClass ?? ''}`}>
            {slots.prefix()}
          </div>
        )}
        {input()}
        {props.suffixIcon && (
          <div
            class={`bar-input__suffix ${props.suffixClass ?? ''}`}
            onClick={props.onSuffixClick}
          >
            <Icon name={props.suffixIcon} />
          </div>
        )}
        {slots.suffix && (
          <div
            class={`bar-input__suffix-content ${props.suffixClass ?? ''}`}
            onClick={props.onSuffixClick}
          >
            {slots.suffix()}
          </div>
        )}
      </div>
    );
  },
});

Input.install = (app: App) => {
  app.component(Input.name, Input);
};

export default Input;
