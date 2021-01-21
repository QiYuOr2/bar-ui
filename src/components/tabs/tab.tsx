import { App, defineComponent, inject, onMounted, Ref } from 'vue';
import './index.less';

export type TabOptions = {
  title: any;
  index: number;
  disabled: boolean;
};

const Tab = defineComponent({
  name: 'bar-tab',
  props: {
    index: { type: Number, required: true },
    title: { type: String, required: true },
    disabled: { type: Boolean, required: false },
  },
  setup(props, { slots }) {
    const tabCollect = inject<(tab: TabOptions) => void>('tabCollect');
    if (tabCollect === undefined) console.warn('tab cannot find tabCollect');
    const activeTabIndex = inject<Ref<number>>('activeTabIndex');
    if (activeTabIndex === undefined)
      console.warn('tab cannot find activeTabIndex');

    onMounted(() => {
      tabCollect &&
        tabCollect({
          title: slots.title ? slots.title() : props.title,
          index: props.index,
          disabled: props.disabled,
        });
    });

    return () =>
      activeTabIndex && activeTabIndex.value !== props.index ? null : (
        <div class="bar-tab">{slots}</div>
      );
  },
});

Tab.install = (app: App) => {
  app.component(Tab.name, Tab);
};

export default Tab;
