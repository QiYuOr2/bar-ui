```html
<template>
  <div>
    <bar-input
      v-model="input"
      placeholder="请输入文本，可以加icon"
      prefix-icon="success"
      suffix-icon="error"
    />
    <bar-input placeholder="只能输入数字" type="number">
      <template #prefix>你好</template>
    </bar-input>
    <bar-input placeholder="请输入密码" type="password">
      <template #suffix>不准偷看</template>
    </bar-input>
    <bar-input placeholder="有错误" has-fail />
    <bar-input placeholder="不可用" disabled />
    <bar-input placeholder="只读" readonly />
    <bar-input placeholder="行内输入框" inline />
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Input } from 'bar-ui';

  export default {
    components: {
      [Input.name]: Input,
    },
    setup() {
      const input = ref('');
      return { input };
    },
  };
</script>
```

## API

| 参数         | 说明                   | 类型             | 可选值            | 默认值 |
| :----------- | :--------------------- | :--------------- | :---------------- | :----- |
| v-model      | 输入框的内容           | string \| number |                   |        |
| placeholder  | 占位符                 | string           |                   |        |
| name         | 输入框的 name          | string           |                   |        |
| type         | 输入框类型             | string           | 原生 input 的类型 | text   |
| inline       | 行内输入框             | boolean          |                   | false  |
| has-fail     | 有错误                 | boolean          |                   | false  |
| disabled     | 禁用                   | boolean          |                   |        |
| readonly     | 只读                   | boolean          |                   |        |
| autofocus    | 自动获取焦点           | boolean          |                   |        |
| maxlength    | 最大长度               | string \| number |                   |        |
| prefix-icon  | 前缀 icon              | string           | iconName          |        |
| suffix-icon  | 后缀 icon              | string           | iconName          |        |
| prefix-class | 前缀 icon 的自定义类名 | string           |                   |        |
| suffix-class | 后缀 icon 的自定义类名 | string           |                   |        |

## Events

| 参数         | 说明         | 函数签名                       |
| :----------- | :----------- | :----------------------------- |
| focus        | 按钮点击事件 | (event: FocusEvent) => void    |
| blur         | 按钮点击事件 | (event: FocusEvent) => void    |
| press-enter  | 按钮点击事件 | (event: KeyboardEvent) => void |
| keypress     | 按钮点击事件 | (event: KeyboardEvent) => void |
| keydown      | 按钮点击事件 | (event: KeyboardEvent) => void |
| keyup        | 按钮点击事件 | (event: KeyboardEvent) => void |
| change       | 按钮点击事件 | (event: Event) => void         |
| input        | 按钮点击事件 | (event: Event) => void         |
| suffix-click | 按钮点击事件 | (event: MouseEvent) => void    |

## Slots

| 名称       | 说明            |
| :--------- | :-------------- |
| prefix     | 自定义前缀      |
| prefixIcon | 自定义前缀 icon |
| suffix     | 自定义后缀      |
| suffixIcon | 自定义后缀 icon |
