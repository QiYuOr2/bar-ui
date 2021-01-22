```html
<template>
  <div>
    <bar-switch />
    <bar-switch v-model="switchVal">
      <template #prefix>1</template>
      <template #suffix>0</template>
    </bar-switch>
    <bar-switch disabled />
    <bar-switch disabled checked />
  </div>
</template>

<script>
  import { Switch } from 'bar-ui';

  export default {
    components: {
      [Switch.name]: Switch,
    },
  };
</script>
```

## API

| 参数     | 说明             | 类型    | 可选值 | 默认值 |
| :------- | :--------------- | :------ | :----- | :----- |
| v-model  | 当前 switch 的值 | Boolean |        |        |
| size     | 大小             | number  |        | 22     |
| checked  | 是否选中（打开） | boolean |        | false  |
| disabled | 是否禁用         | boolean |        | false  |

## Events

| 参数   | 说明            | 函数签名                 |
| :----- | :-------------- | :----------------------- |
| change | switch 状态改变 | (state: boolean) => void |

## Slots

| 名称   | 说明               |
| :----- | :----------------- |
| prefix | 左半边可显示的内容 |
| suffix | 右半边可显示的内容 |
