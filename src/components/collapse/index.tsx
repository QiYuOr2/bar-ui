import { App, defineComponent, provide, ref, Ref } from 'vue';
import './index.less';

const Collapse = defineComponent({
  name: 'bar-collapse',
  props: {
    accordion: { type: Boolean, default: false },
    modelValue: Number,
  },
  setup(props, { emit, slots }) {
    const activeIndex = ref(-1);
    provide('toggle', (index: number, visible: Ref<Boolean>) => {
      visible.value = !visible.value;
      activeIndex.value = index;
      emit('update:modelValue', index);
    });
    provide('accordion', props.accordion);
    provide('activeIndex', activeIndex);
    return () => <div class="bar-collapse">{slots}</div>;
  },
});

Collapse.install = (app: App) => {
  app.component(Collapse.name, Collapse);
};

export default Collapse;
