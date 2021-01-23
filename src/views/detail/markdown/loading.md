```html
<template>
  <div>
    <bar-switch v-model="isLoad" />
    <bar-loading v-model="isLoad" loading-text="自定义加载文字">
      <div>感谢使用BAR-UI</div>
    </bar-loading>
    <bar-loading loading-text="自定义加载图标和颜色" color="red">
      <template #icon>
        <bar-icon name="success" color="red" />
      </template>
      <div>感谢使用BAR-UI</div>
    </bar-loading>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Icon, Switch, Loading } from 'bar-ui';

  export default {
    components: {
      [Loading.name]: Loading,
      [Switch.name]: Switch,
      [Icon.name]: Icon,
    },
    setup() {
      const isLoad = ref(false);
      return { isLoad };
    },
  };
</script>
```

## API

| 参数         | 说明           | 类型    | 可选值   | 默认值 |
| :----------- | :------------- | :------ | :------- | :----- |
| v-model      | 是否显示       | boolean |          | true   |
| loading-text | 加载文字       | string  |          |        |
| color        | 图标和文字颜色 | string  | 十六进制 |        |
| mask-color   | 遮罩层颜色     | string  | 十六进制 |        |

## Slots

| 名称 | 说明     |
| :--- | :------- |
| icon | 加载图标 |
