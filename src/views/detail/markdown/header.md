```html
<template>
  <div>
    <bar-header title="普通页头" />
    <bar-header title="普通页头" sub-title="有子标题的页头" />
    <bar-header
      title="普通页头"
      sub-title="有返回按钮的页头"
      left-text="返回"
      :left-arrow="true"
    />
    <bar-header title="都可以自定义" sub-title="有右侧按钮的页头">
      <template #left>自定义</template>
      <template #right>自定义</template>
    </bar-header>
    <bar-header
      title="自定义颜色"
      color="#fff"
      text-color="#000"
      left-text="返回"
      :left-arrow="true"
    />
  </div>
</template>

<script>
  import { Header } from 'bar-ui';

  export default {
    components: {
      [Header.name]: Header,
    },
  };
</script>
```

## API

| 参数          | 说明                 | 类型    | 可选值       | 默认值 |
| :------------ | :------------------- | :------ | :----------- | :----- |
| title         | 标题                 | string  |              | ''     |
| sub-title     | 副标题               | string  |              | ''     |
| color         | 标题背景色           | string  | 十六进制颜色 |        |
| text-color    | 文字颜色             | string  | 十六进制颜色 |        |
| fixed         | 是否固定到顶部       | boolean |              | false  |
| scroll-target | 点击标题后滚动的元素 | string  |              |        |
| left-text     | 左边的文字           | string  |              | ''     |
| left-arrow    | 是否显示左边的箭头   | boolean |              | false  |

## Events

| 参数        | 说明         | 函数签名                    |
| :---------- | :----------- | :-------------------------- |
| click-left  | 左侧点击事件 | (event: MouseEvent) => void |
| click-right | 右侧点击事件 | (event: MouseEvent) => void |

## Slots

| 名称 | 说明           |
| :--- | :------------- |
| left | 自定义左侧内容 |
| right | 自定义右侧内容 |
