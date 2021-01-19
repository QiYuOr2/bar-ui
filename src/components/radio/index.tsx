import { App, defineComponent } from 'vue';
import './index.less';

const Radio = defineComponent({
  name: 'bar-radio',
  props: {
    name: String,
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class="bar-radio">
        <label>
          <span class="bar-radio__circle">
            <input
              type="radio"
              name={props.name}
              value={props.value}
              disabled={props.disabled}
            />
          </span>
          <span class="bar-radio__text">{slots}</span>
        </label>
      </div>
    );
  },
});

Radio.install = (app: App) => {
  app.component(Radio.name, Radio);
};

export default Radio;
