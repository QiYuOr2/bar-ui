```html
<template>
  <div>
    <bar-button @click="visible = true">基本模态框</bar-button>
    <bar-button @click="notice = true">通知框</bar-button>
    <bar-button @click="noMask = true">无遮罩</bar-button>
    <bar-modal title="模态框标题" v-model="visible">模态框</bar-modal>
    <bar-modal type="notice" title="通知" v-model="notice">
      <div style="margin-bottom: 10px">1. 更新公告</div>
      <div>2. 更新公告</div>
    </bar-modal>
    <bar-modal title="模态框标题" v-model="noMask" :show-mask="false">
      模态框
    </bar-modal>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Modal } from 'bar-ui';

  export default {
    components: {
      [Modal.name]: Modal,
      [Button.name]: Button,
    },
    setup() {
      const visible = ref(false);
      const notice = ref(false);
      const noMask = ref(false);
      return { visible, notice, noMask };
    },
  };
</script>
```

## API

| 参数        | 说明         | 类型    | 可选值                | 默认值  |
| :---------- | :----------- | :------ | :-------------------- | :------ |
| v-model     | 是否显示     | boolean |                       | false   |
| type        | 类型         | string  | 'default' \| 'notice' | default |
| title       | 标题         | string  |                       |         |
| show-mask   | 显示遮罩     | boolean |                       | true    |
| show-close  | 显示关闭按钮 | boolean |                       | true    |
| cancel-text | 取消按钮文本 | string  |                       |         |
| ok-text     | 确认按钮文本 | string  |                       |         |

## Events

| 参数   | 说明     | 函数签名                    |
| :----- | :------- | :-------------------------- |
| cancel | 取消事件 | (event: MouseEvent) => void |
| ok     | 确认事件 | (event: MouseEvent) => void |

## Slots

| 名称   | 说明           |
| :----- | :------------- |
| title  | 模态框标题部分 |
| footer | 模态框底部     |
