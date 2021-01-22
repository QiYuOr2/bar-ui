```html
<template>
  <div>
    <bar-dialog>Dialog</bar-dialog>
  </div>
</template>

<script>
  import { Dialog } from 'bar-ui';

  export default {
    components: {
      [Dialog.name]: Dialog,
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
