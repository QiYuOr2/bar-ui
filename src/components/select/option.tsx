import {
  App,
  computed,
  defineComponent,
  inject,
  onMounted,
  PropType,
  Ref,
  watch,
} from 'vue';
import Item from '../item';
import './index.less';

export type OptionProps = {
  label: string;
  value: string | number;
};

const Option = defineComponent({
  name: 'bar-option',
  props: {
    label: { type: String, required: true },
    value: { type: [String, Number], required: true },
    onClick: Function as PropType<(event: MouseEvent) => void>,
  },
  setup(props, { emit }) {
    const selectValue = inject<OptionProps>('selectValue');
    const searckKey = inject<() => string>('searchKey');

    onMounted(() => {
      if (selectValue && selectValue.value === props.value) {
        selectValue.label = props.label;
      }
    });

    const handleClick = (event: MouseEvent) => {
      if (selectValue) {
        selectValue.value = props.value;
        selectValue.label = props.label;
      }
      emit('click', event);
    };

    const search = computed(() => searckKey?.());

    const isSearched = () => {
      return props.label.includes(search.value || '');
    };

    return () =>
      isSearched() && (
        <li class="bar-option" onClick={handleClick}>
          <Item type="select">{props.label}</Item>
        </li>
      );
  },
});

Option.install = (app: App) => {
  app.component(Option.name, Option);
};

export default Option;
