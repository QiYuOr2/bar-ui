```html
<template>
  <div>
    <bar-button @click="alertShow = !alertShow">切换状态</bar-button>
    <bar-alert v-model="alertShow" :closable="false">info提示</bar-alert>
    <bar-alert type="success">success提示</bar-alert>
    <bar-alert type="warn">warn提示</bar-alert>
    <bar-alert type="danger">danger提示</bar-alert>
  </div>
</template>

<script>
  import { Alert, Button } from 'bar-ui';

  export default {
    components: {
      [Alert.name]: Alert,
      [Button.name]: Button,
    },
    setup() {
      const alertShow = ref(true);
      return { alertShow };
    },
  };
</script>
```

## API

| 参数     | 说明         | 类型    | 可选值                                    | 默认值 |
| :------- | :----------- | :------ | :---------------------------------------- | :----- |
| v-model  | 当前是否显示 | boolean |                                           |        |
| type     | 类型         | boolean | 'success' \| 'info' \| 'danger' \| 'warn' | info   |
| closable | 是否可以关闭 | boolean |                                           | true   |
