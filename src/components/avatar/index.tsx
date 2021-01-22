import { App, defineComponent, PropType } from 'vue';
import './index.less';

const Avatar = defineComponent({
  name: 'bar-avatar',
  props: {
    src: { type: String },
    alt: { type: String },
    size: { type: Number, default: 42 },
    shape: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
    hasShadow: { type: Boolean, default: true },
    onError: Function as PropType<(e: Event) => void>,
  },
  setup(props, { emit, slots }) {
    const loadError = (e: Event) => {
      emit('error', e);
    };

    return () => (
      <div
        class={[
          'bar-avatar',
          { square: props.shape === 'square', shadow: props.hasShadow },
        ]}
        style={`width: ${props.size}px; height: ${props.size}px;`}
      >
        {props.src && (
          <img
            src={props.src}
            alt={props.alt}
            style={`width: ${props.size}px; height: ${props.size}px;`}
            onError={loadError}
          />
        )}
        {slots.default && <div>{slots.default()}</div>}
      </div>
    );
  },
});

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar);
};

export default Avatar;
