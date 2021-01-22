---
to: src/views/detail/markdown/<%= h.changeCase.lcFirst(name) %>.md
---
```html
<template>
  <div>
    <bar-<%= h.changeCase.lcFirst(name) %>><%= name %></bar-<%= h.changeCase.lcFirst(name) %>>
  </div>
</template>

<script>
  import { <%= name %> } from 'bar-ui';

  export default {
    components: {
      [<%= name %>.name]: <%= name %>,
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
