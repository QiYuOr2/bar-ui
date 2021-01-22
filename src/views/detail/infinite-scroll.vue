<template>
  <div>
    <h2>Infinite-scroll 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Infinite-scroll } from '../../components';
import Infinite-scrollMd from './markdown/infinite-scroll.md';
export default {
  components: {
    [Infinite-scroll.name]: Infinite-scroll,
    md: Infinite-scrollMd,
  },
};
</script>

<style>
div .bar-infinite-scroll {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
