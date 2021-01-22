```html
<template>
  <div>
    <bar-divider />
    <bar-divider>我是分割线</bar-divider>
  </div>
</template>

<script>
  import { Divider } from 'bar-ui';

  export default {
    components: {
      [Divider.name]: Divider,
    },
  };
</script>
```

## API

| 参数       | 说明             | 类型   | 可选值               | 默认值               |
| :--------- | :--------------- | :----- | :------------------- | :------------------- |
| position   | 文字位置         | string | left、right          |                      |
| text-class | 文字的自定义类名 | string |                      | 42                   |
| type       | 分割线类型       | string | horizontal、vertical | horizontal、vertical |
