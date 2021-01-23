Item 组件通常用于 dropdown 和 tabbar 组件中

```html
<template>
  <div>
    <bar-item>Hello</bar-item>
    <bar-item>world</bar-item>
  </div>
</template>

<script>
  import { Item } from 'bar-ui';

  export default {
    components: {
      [Item.name]: Item,
    },
  };
</script>
```

## API

| 参数  | 说明                                                  | 类型    | 可选值                    | 默认值  |
| :---- | :---------------------------------------------------- | :------ | :------------------------ | :------ |
| type  | item 类型                                             | string  | default、dropdown、tabbar | default |
| name  | item 的标识符                                         | string  |                           |         |
| icon  | 图标                                                  | string  | iconName                  |         |
| dot   | item 类型为 tabbar 时的属性，在右上角显示小红点       | Boolean |                           | false   |
| badge | item 类型为 tabbar 时的属性，在右上角显示有数字小红点 | number  |                           | 0       |

## Events

| 参数  | 说明             | 函数签名                    |
| :---- | :--------------- | :-------------------------- |
| click | 点击 item 的事件 | (event: MouseEvent) => void |

## Slots

| 名称 | 说明                                       |
| :--- | :----------------------------------------- |
| icon | 自定义 icon, dropdown 和 tabbar 含有的插槽 |
