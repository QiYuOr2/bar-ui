import { App, defineComponent, PropType, provide, ref, watch } from 'vue';
import './index.less';

const Tabbar = defineComponent({
  name: 'bar-tabbar',
  props: {
    modelValue: String,
    onChange: Function as PropType<(name: string) => void>,
    fixed: { type: Boolean, default: true },
  },
  setup(props, { emit, slots }) {
    const activeName = ref(props.modelValue || '');

    provide('changeActive', (name: string) => {
      activeName.value = name;
      emit('update:modelValue', name);
    });
    provide('activeName', activeName);

    watch(
      () => props.modelValue,
      (newVal) => {
        emit('change', newVal);
      }
    );

    return () => (
      <div class={['bar-tabbar', { fixed: props.fixed }]}>{slots}</div>
    );
  },
});

Tabbar.install = (app: App) => {
  app.component(Tabbar.name, Tabbar);
};

export default Tabbar;
