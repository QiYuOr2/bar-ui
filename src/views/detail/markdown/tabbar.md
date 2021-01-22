```html
<template>
  <div>
    <bar-tabbar>Tabbar</bar-tabbar>
  </div>
</template>

<script>
  import { Tabbar } from 'bar-ui';

  export default {
    components: {
      [Tabbar.name]: Tabbar,
    },
  };
</script>
```

## API

| 参数          | 说明           | 类型    | 可选值              | 默认值  |
| :------------ | :------------- | :------ | :-------------- | :------ |
|           |        |   |  |  |

## Events

| 参数  | 说明         | 函数签名                    |
| :---- | :----------- | :-------------------------- |
| click | 按钮点击事件 | (event: MouseEvent) => void |

## Slots

| 名称 | 说明        |
| :--- | :---------- |
|  |  |
