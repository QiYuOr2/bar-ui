---
to: src/components/<%= h.changeCase.lcFirst(name) %>/index.tsx
---
import { App, defineComponent } from 'vue';
import './index.less';

const <%= name %> = defineComponent({
  name: 'bar-<%= h.changeCase.lcFirst(name) %>',
  setup() {
    return () => <div class="bar-<%= h.changeCase.lcFirst(name) %>"><%= name %></div>;
  }
});

<%= name %>.install = (app: App) => {
  app.component(<%= name %>.name, <%= name %>);
};

export default <%= name %>;