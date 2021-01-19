import { App, defineComponent, PropType, provide, ref, watch } from 'vue';
import './index.less';
import { TabOptions } from './tab';

const Tabs = defineComponent({
  name: 'bar-tabs',
  props: {
    modelValue: Number,
    mode: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    type: {
      type: String as PropType<'border' | 'underline'>,
      default: 'border',
    },
    onChange: Function as PropType<() => void>,
  },
  setup(props, { emit, slots }) {
    const tabArray = ref<TabOptions[]>([]);
    const activeTabIndex = ref<number | null>(1);

    const tabCollect = (tab: TabOptions) => {
      const existTab = tabArray.value.find((item) => item.index === tab.index);
      if (!existTab) {
        tabArray.value.push(tab);
      }
    };

    const tabChange = (index: number) => {
      if (activeTabIndex.value !== index) {
        emit('update:modelValue', index);
      }
      activeTabIndex.value = index;
    };

    provide('tabCollect', tabCollect);
    provide('activeTabIndex', activeTabIndex);

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal || newVal === 0 || newVal === null) {
          activeTabIndex.value = newVal;
        }
      }
    );

    return () => (
      <div
        class={[
          'bar-tabs',
          {
            'tabs-vertical': props.mode === 'vertical',
            'tabs-underline':
              props.type === 'underline' && props.mode !== 'vertical',
          },
        ]}
      >
        <div class="bar-tabs__label">
          {tabArray.value.map((tab) => (
            <div
              class={[
                { 'tab-active': activeTabIndex.value === tab.index },
                { 'tab-disabled': tab.disabled },
              ]}
              key={tab.index}
              onClick={() => !tab.disabled && tabChange(tab.index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div class="bar-tabs__content">{slots}</div>
      </div>
    );
  },
});

Tabs.install = (app: App) => {
  app.component(Tabs.name, Tabs);
};

export default Tabs;
