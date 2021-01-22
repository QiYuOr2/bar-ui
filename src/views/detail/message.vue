<template>
  <div class="message-container">
    <h2>轻提示</h2>
    <bar-button @click="showMessage1">info</bar-button>
    <bar-button type="success" @click="showMessage2">success</bar-button>
    <bar-button type="warn" @click="showMessage3">warn</bar-button>
    <bar-button type="danger" @click="showMessage4">error</bar-button>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Button, Message } from '../../components';
import MessageMd from './markdown/message.md';
export default {
  components: {
    [Button.name]: Button,
    md: MessageMd,
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

<style>
.message-container .bar-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
