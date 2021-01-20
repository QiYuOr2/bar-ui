import { App, defineComponent, provide, reactive, ref, watch } from 'vue';
import Input from '../input';
import './index.less';
import { OptionProps } from './option';

const Select = defineComponent({
  name: 'bar-select',
  props: {
    modelValue: [String, Number],
    placeholder: String,
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    autoFocus: { type: Boolean, default: false },
    defaultValue: [String, Number],
  },
  setup(props, { emit, slots }) {
    const focus = ref(false);
    const searchKey = ref('');

    const value = reactive<OptionProps>({
      label: '',
      value: props.defaultValue || '',
    });

    watch(value, () => {
      focus.value = false;
      emit('update:modelValue', value.value);
    });

    provide('selectValue', value);

    const clearable = () => {
      if (props.clearable && value.label !== '') {
        return true;
      }
    };

    provide('searchKey', () => searchKey.value);
    const search = (e: Event) => {
      searchKey.value = (e as InputEvent).data || '';
    };

    return () => (
      <div
        class={[
          'bar-select',
          { 'is-focus': focus.value, disabled: props.disabled },
        ]}
      >
        <Input
          onFocus={() => (focus.value = true)}
          onBlur={() => (focus.value = false)}
          autofocus={props.autoFocus}
          name={props.name}
          placeholder={props.placeholder}
          suffixIcon={clearable() ? 'close' : 'down'}
          suffixClass="bar-select-down-icon"
          modelValue={value.label}
          disabled={props.disabled}
          onInput={search}
          onSuffixClick={() => {
            if (clearable()) {
              value.label = '';
              value.value = '';
              return;
            }
          }}
        />
        <ul class="bar-select-options">{slots}</ul>
      </div>
    );
  },
});

Select.install = (app: App) => {
  app.component(Select.name, Select);
};

export default Select;
