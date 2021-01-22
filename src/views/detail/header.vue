<template>
  <div>
    <h2>Header 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Header } from '../../components';
import HeaderMd from './markdown/header.md';
export default {
  components: {
    [Header.name]: Header,
    md: HeaderMd,
  },
};
</script>

<style>
div .bar-header {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
