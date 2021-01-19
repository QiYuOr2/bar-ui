import { App, defineComponent } from 'vue';
import './index.less';

const RadioGroup = defineComponent({
  name: 'bar-radio-group',
  setup(props, { slots }) {
    return () => <div class="bar-radio-group">{slots}</div>;
  },
});

RadioGroup.install = (app: App) => {
  app.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;
