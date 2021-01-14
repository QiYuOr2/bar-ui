import { App, ComponentOptionsWithObjectProps, defineComponent } from 'vue';

export default function createComponent(
  name: string,
  sfc: ComponentOptionsWithObjectProps
) {
  sfc.name = name;
  sfc.install = (app: App) => {
    app.component(name, sfc);
    app.component(`bar-${name}`, sfc);
  };
  return defineComponent(sfc);
}
