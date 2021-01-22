```html
<template>
  <div>
    <bar-textarea
      v-model="textarea"
      :rows="5"
      :cols="30"
      placeholder="自定义行列数"
    />
    <bar-textarea v-model="textarea" :row="5" placeholder="占满宽度" block />
    <bar-textarea placeholder="有错误" has-fail :maxlength="5" />
    <bar-textarea placeholder="禁用" disabled />
    <bar-textarea placeholder="只读" readonly />
  </div>
</template>

<script>
  import { Textarea } from 'bar-ui';

  export default {
    components: {
      [Textarea.name]: Textarea,
    },
    setup() {
      const textarea = ref('');
      return { textarea };
    },
  };
</script>
```

## API

| 参数        | 说明          | 类型             | 可选值            | 默认值 |
| :---------- | :------------ | :--------------- | :---------------- | :----- |
| v-model     | 输入框的内容  | string \| number |                   |        |
| placeholder | 占位符        | string           |                   |        |
| rows        | 行数          | number           |                   | 4      |
| cols        | 列数          | number           |                   | 20     |
| name        | 输入框的 name | string           |                   |        |
| type        | 输入框类型    | string           | 原生 input 的类型 | text   |
| block       | 块级输入框    | boolean          |                   | false  |
| has-fail    | 有错误        | boolean          |                   | false  |
| disabled    | 禁用          | boolean          |                   | false  |
| readonly    | 只读          | boolean          |                   | false  |
| autofocus   | 自动获取焦点  | boolean          |                   | false  |
| maxlength   | 最大长度      | string \| number |                   |        |

## Events

| 参数        | 说明         | 函数签名                       |
| :---------- | :----------- | :----------------------------- |
| focus       | 按钮点击事件 | (event: FocusEvent) => void    |
| blur        | 按钮点击事件 | (event: FocusEvent) => void    |
| press-enter | 按钮点击事件 | (event: KeyboardEvent) => void |
| keypress    | 按钮点击事件 | (event: KeyboardEvent) => void |
| keydown     | 按钮点击事件 | (event: KeyboardEvent) => void |
| keyup       | 按钮点击事件 | (event: KeyboardEvent) => void |
| change      | 按钮点击事件 | (event: Event) => void         |
| input       | 按钮点击事件 | (event: Event) => void         |
