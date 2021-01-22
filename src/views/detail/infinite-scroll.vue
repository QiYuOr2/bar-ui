<template>
  <div>
    <h2>Infinite-scroll 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { InfiniteScroll } from '../../components';
import InfiniteScrollMd from './markdown/infinite-scroll.md';
export default {
  components: {
    [InfiniteScroll.name]: InfiniteScroll,
    md: InfinitScrollMd,
  },
};
</script>

<style>
div .bar-infinite-scroll {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
