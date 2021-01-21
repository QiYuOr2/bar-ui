import {
  App,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  reactive,
  ref,
} from 'vue';
import './index.less';

const InfiniteScroll = defineComponent({
  name: 'bar-infinite-scroll',
  props: {
    finished: { type: Boolean, default: false },
    offset: { type: Number, default: 300 },
    height: { type: [Number, String] },
    loadingText: { type: String, default: '加载中...' },
    finishedText: { type: String, default: '加载完成' },
    errorText: { type: String, default: '加载出错' },
    onLoad: { type: Function as PropType<() => Promise<any>>, required: true },
    inWindow: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    // 计算scroll的元素
    const root = ref<HTMLElement>();

    const state = reactive({
      loading: false,
      error: false,
      finish: false,
    });

    const onLoad = () => {
      state.loading = true;

      return props
        .onLoad()
        .catch(() => (state.error = true))
        .finally(() => (state.loading = false));
    };

    onMounted(() => {
      onLoad();
    });

    const onScroll = (inWindow = false) => {
      if (props.inWindow && !inWindow) return;
      if (state.loading || state.error || props.finished) return;
      const element = root.value!;
      if (props.inWindow) {
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - props.offset
        ) {
          onLoad();
        }
      } else if (
        element.scrollTop + element.clientHeight >=
        element.scrollHeight - props.offset
      ) {
        onLoad();
      }
    };

    const onScrollInWindow = () => {
      onScroll(true);
    };

    if (props.inWindow) {
      onMounted(() => {
        addEventListener('scroll', onScrollInWindow);
      });

      onBeforeUnmount(() => {
        removeEventListener('scroll', onScrollInWindow);
      });
    }

    const renderTip = () => {
      if (props.finished)
        return (
          <div class="bar-infinite-scroll__tip finish">
            {slots.finished ? slots.finished() : props.finishedText}
          </div>
        );
      if (state.error)
        return (
          <div class="bar-infinite-scroll__tip error">
            {slots.error ? slots.error() : props.errorText}
          </div>
        );
      if (state.loading)
        return (
          <div class="bar-infinite-scroll__tip loading">
            {slots.loading ? slots.loading() : props.loadingText}
          </div>
        );
    };

    return () => (
      <div
        ref={root}
        class="bar-infinite-scroll"
        onScroll={onScroll.bind(null, false)}
        style={{
          height: Number.isFinite(props.height)
            ? `${props.height}px`
            : props.height,
        }}
      >
        <div class="bar-infinite-scroll__inner">{slots}</div>
        {renderTip()}
      </div>
    );
  },
});

InfiniteScroll.install = (app: App) => {
  app.component(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
