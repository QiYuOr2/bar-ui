```html
<template>
  <div>
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/Tuzilow/Tuzilow.github.io/images/avatar.png"
      alt="123"
      :size="32"
      shape="square"
    />
    <bar-avatar>文字</bar-avatar>
  </div>
</template>

<script>
  import { Avatar } from 'bar-ui';

  export default {
    components: {
      [Avatar.name]: Avatar,
    },
  };
</script>
```

## API

| 参数       | 说明                     | 类型    | 可选值         | 默认值 |
| :--------- | :----------------------- | :------ | :------------- | :----- |
| src        | 图片地址                 | string  |                |        |
| size       | 图片大小                 | number  |                | 42     |
| alt        | 图片加载失败时显示的文字 | string  |                |        |
| shape      | 头像形状                 | string  | circle, square | circle |
| has-shadow | 头像阴影                 | boolean |                | true   |

## Events

| 参数  | 说明         | 函数签名               |
| :---- | :----------- | :--------------------- |
| error | 图片加载失败 | (event: Event) => void |
