```html
<template>
  <div>
    <bar-tabs>Tabs</bar-tabs>
  </div>
</template>

<script>
  import { Tabs } from 'bar-ui';

  export default {
    components: {
      [Tabs.name]: Tabs,
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
