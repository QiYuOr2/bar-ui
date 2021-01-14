import { App, defineComponent } from 'vue';
import './index.less';

const Section = defineComponent({
  name: 'bar-section',
  props: {
    title: String,
  },
  setup(props, { slots }) {
    return () => (
      <section class="bar-section">
        {props.title && (
          <div class="title">
            <span class="sign"></span>
            <span>{props.title}</span>
          </div>
        )}
        <div class="content">{slots}</div>
      </section>
    );
  },
});

Section.install = (app: App) => {
  app.component(Section.name, Section);
};

export default Section;
