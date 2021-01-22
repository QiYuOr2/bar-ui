```html
<template>
  <div>
    <bar-icon name="loading" size="sm" />
  </div>
</template>

<script>
  import { Icon } from 'bar-ui';

  export default {
    components: {
      [Icon.name]: Icon,
    },
  };
</script>
```

## API

| 参数  | 说明     | 类型              | 可选值                                                                                                         | 默认值       |
| :---- | :------- | :---------------- | :------------------------------------------------------------------------------------------------------------- | :----------- |
| name  | 图标名   | string            | loading、left、right、up、down、heart、success、info、warn、<br/>error、close、home、user、bars、menu、setting |              |
| size  | 图标大小 | string            | normal、xs、sm、lg                                                                                             | normal       |
| color | 图标颜色 | string (十六进制) |                                                                                                                | currentColor |
