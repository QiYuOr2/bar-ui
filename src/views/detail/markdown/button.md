```html
<template>
  <div>
    <bar-button type="primary" size="sm" shape="round"> 圆角 </bar-button>
  </div>
</template>

<script>
  import { Buttom } from 'bar-ui';

  export default {
    components: {
      [Buttom.name]: Buttom,
    },
  };
</script>
```

## API

| 参数          | 说明           | 类型    | 可选值                                                      | 默认值  |
| :------------ | :------------- | :------ | :---------------------------------------------------------- | :------ |
| type          | 按钮类型       | string  | default、primary、success、warn、danger、link、future、text | default |
| size          | 按钮大小       | string  | normal、lg、sm                                              | normal  |
| block         | 是否为块级按钮 | boolean |                                                             | false   |
| loading       | 是否在加载     | boolean |                                                             | false   |
| disabled      | 是否不可用     | boolean |                                                             | false   |
| shape         | 按钮形状       | string  | circle、round                                               |         |
| icon          | 按钮图标       | string  | icon 组件所有 iconName                                      |         |
| icon-position | 图标位置       | string  | left、right                                                 | left    |
| icon-size     | 图标大小       | string  | normal、 xs、 sm 、lg                                       | sm      |

## Events

| 参数  | 说明         | 函数签名                    |
| :---- | :----------- | :-------------------------- |
| click | 按钮点击事件 | (event: MouseEvent) => void |

## Slots

| 名称 | 说明        |
| :--- | :---------- |
| icon | 自定义 icon |
