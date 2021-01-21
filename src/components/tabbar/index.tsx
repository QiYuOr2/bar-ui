import { App, defineComponent } from 'vue';
import './index.less';

const Tabbar = defineComponent({
  name: 'bar-tabbar',
  setup(props, { slots }) {
    return () => <div class="bar-tabbar">{slots}</div>;
  },
});

Tabbar.install = (app: App) => {
  app.component(Tabbar.name, Tabbar);
};

export default Tabbar;
