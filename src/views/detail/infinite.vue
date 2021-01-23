<template>
  <div class="infinite-container">
    <h2>infinite-scroll 无限列表组件</h2>
    <bar-infinite-scroll @load="load" :height="200" :finished="finished">
      <div class="scroll-card" v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </bar-infinite-scroll>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { InfiniteScroll } from '../../components';
import InfiniteScrollMd from './markdown/infinite.md';

export default {
  components: {
    [InfiniteScroll.name]: InfiniteScroll,
    md: InfiniteScrollMd,
  },
  setup() {
    const list = ref([]);
    const finished = ref(false);
    const load = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const n = list.value.length;
          if (n >= 60) {
            finished.value = true;
            return resolve();
          }
          for (let i = n + 1; i <= n + 20; i++) {
            list.value.push(i);
          }
          resolve();
        }, 1000);
      });
    };
    return { list, finished, load };
  },
};
</script>

<style>
.infinite-container .bar-infinite-scroll {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.infinite-container .scroll-card {
  text-align: center;
  border-bottom: 1px solid lightgray;
  line-height: 40px;
  font-size: 14px;
}
</style>
