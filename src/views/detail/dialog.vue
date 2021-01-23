<template>
  <div>
    <h2>Dialog 通知框组件</h2>
    <bar-button @click="showDialog">Dialog</bar-button>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Button, Dialog } from '../../components';
import DialogMd from './markdown/dialog.md';
export default {
  components: {
    [Button.name]: Button,
    md: DialogMd,
  },
  setup() {
    const showDialog = () => {
      Dialog.danger({
        type: 'notice',
        title: '你好',
        content: '你好你你好你好你好',
        onOk: () => {
          console.log(1);
        },
      });
    };
    return { showDialog };
  },
};
</script>

<style>
div .bar-dialog {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
