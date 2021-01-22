<template>
  <div class="alert-container">
    <h2>Alert 按钮组件</h2>
    <bar-button @click="alertShow = !alertShow">切换状态</bar-button>
    <bar-alert v-model="alertShow" :closable="false">info提示</bar-alert>
    <bar-alert type="success">success提示</bar-alert>
    <bar-alert type="warn">warn提示</bar-alert>
    <bar-alert type="danger">danger提示</bar-alert>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Button, Alert } from '../../components';
import AlertMd from './markdown/alert.md';
export default {
  components: {
    [Alert.name]: Alert,
    [Button.name]: Button,
    md: AlertMd,
  },
  setup() {
    const alertShow = ref(true);
    return { alertShow };
  },
};
</script>

<style>
.alert-container .bar-alert,
.alert-container .bar-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
