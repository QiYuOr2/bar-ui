import { App, defineComponent } from 'vue';
import Icon from '../icon';
import './index.less';

const Loading = defineComponent({
  name: 'bar-loading',
  props: {
    modelValue: { type: Boolean, default: true },
    loadingText: String,
    color: String,
    maskColor: String,
  },
  setup(props, { slots }) {
    return () => (
      <div class="bar-loading">
        {props.modelValue && (
          <div
            class="bar-loading__mask"
            style={{ backgroundColor: props.maskColor }}
          >
            {slots.icon ? (
              slots.icon()
            ) : (
              <Icon name="loading" color={props.color} />
            )}
            {props.loadingText && (
              <span style={{ color: props.color }}>{props.loadingText}</span>
            )}
          </div>
        )}
        <div class="bar-loading__content">{slots}</div>
      </div>
    );
  },
});

Loading.install = (app: App) => {
  app.component(Loading.name, Loading);
};

export default Loading;
