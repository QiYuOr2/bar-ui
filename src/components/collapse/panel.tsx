import {
  App,
  defineComponent,
  inject,
  PropType,
  Ref,
  ref,
  Transition,
} from 'vue';
import transitionHook from './transitionHook';
import Icon from '../icon';
import './index.less';

const Panel = defineComponent({
  name: 'bar-panel',
  props: {
    title: { type: String },
    index: { type: [Number, String], required: true },
    onOpen: { type: Function as PropType<(event: MouseEvent) => void> },
    onClose: { type: Function as PropType<(event: MouseEvent) => void> },
  },
  setup(props, { emit, slots }) {
    const toggle = inject<
      (index: number | String, visible: Ref<Boolean>) => void
    >('toggle');
    if (toggle === undefined) {
      console.warn('panel cannot get toggle');
    }
    const accordion = inject<boolean>('accordion');
    if (accordion === undefined) {
      console.warn('panel cannot get accordion');
    }
    const visible = ref(false);

    const handleClick = (e: MouseEvent) => {
      toggle && toggle(props.index, visible);
      if (visible.value) {
        emit('open', e);
      } else {
        emit('close', e);
      }
    };

    const isActive = () => {
      if (accordion) {
        const activeIndex = inject<Ref<number>>('activeIndex');
        if (props.index === activeIndex?.value && visible.value) {
          return true;
        } else if (props.index === activeIndex?.value) {
          return visible.value;
        }
        visible.value = false;
        return false;
      }
      return visible.value;
    };

    return () => (
      <div class="bar-panel">
        <div
          class={`bar-panel__title ${isActive() ? 'panel-active' : ''}`}
          onClick={handleClick}
        >
          {slots.title ? slots.title() : props.title}
          <Icon name="down" size="xs" />
        </div>
        <Transition
          name="bpc"
          onBeforeEnter={transitionHook.beforeEnter}
          onEnter={transitionHook.enter}
          onAfterEnter={transitionHook.afterEnter}
          onBeforeLeave={transitionHook.beforeLeave}
          onLeave={transitionHook.leave}
          onAfterLeave={transitionHook.afterEnter}
        >
          <div v-show={visible.value} class="bar-panel__content">
            <div>{slots}</div>
          </div>
        </Transition>
      </div>
    );
  },
});

Panel.install = (app: App) => {
  app.component(Panel.name, Panel);
};

export default Panel;
