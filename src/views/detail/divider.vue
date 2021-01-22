<template>
  <div>
    <h2>Divider 分割线组件</h2>
    <bar-divider />
    <bar-divider>我是分割线</bar-divider>
    <bar-divider position="left">我是分割线靠左</bar-divider>
    <bar-divider position="right">我是分割线靠右</bar-divider>
    <div style="display: flex; align-items: center">
      我
      <bar-divider type="vertical" />
      是
      <bar-divider type="vertical" />
      分
      <bar-divider type="vertical" />
      割
      <bar-divider type="vertical" />
      线
    </div>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Divider } from '../../components';
import DividerMd from './markdown/divider.md';
export default {
  components: {
    [Divider.name]: Divider,
    md: DividerMd,
  },
};
</script>

<style></style>
