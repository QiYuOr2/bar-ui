```html
<template>
  <div class="message-container">
    <h2>轻提示</h2>
    <bar-button @click="showMessage1">info</bar-button>
    <bar-button type="success" @click="showMessage2">success</bar-button>
    <bar-button type="warn" @click="showMessage3">warn</bar-button>
    <bar-button type="danger" @click="showMessage4">error</bar-button>
  </div>
</template>

<script>
  import { Button, Message } from '../../components';
  export default {
    components: {
      [Button.name]: Button,
    },
    setup() {
      const showMessage1 = () => {
        Message.info('info');
      };
      const showMessage2 = () => {
        Message.success('success');
      };
      const showMessage3 = () => {
        Message.warn('warn');
      };
      const showMessage4 = () => {
        Message.error('error');
      };
      return {
        showMessage1,
        showMessage2,
        showMessage3,
        showMessage4,
      };
    },
  };
</script>
```

## API

| 方法名     | 说明     | 参数              | 返回值 |
| :--------- | :------- | :---------------- | :----- |
| .warn()    | 警告提示 | options \| string | void   |
| .success() | 成功提示 | options \| string | void   |
| .info()    | 普通提示 | options \| string | void   |
| .error()   | 错误提示 | options \| string | void   |

## Options

| 参数     | 说明     | 类型   | 默认值      |
| :------- | :------- | :----- | :---------- |
| content  | 内容     | string |             |
| duration | 持续时间 | number | 2500 (毫秒) |

## Slots

| 名称 | 说明        |
| :--- | :---------- |
| icon | 自定义 icon |
