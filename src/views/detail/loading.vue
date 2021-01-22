<template>
  <div>
    <h2>Loading 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Loading } from '../../components';
import LoadingMd from './markdown/loading.md';
export default {
  components: {
    [Loading.name]: Loading,
    md: LoadingMd,
  },
};
</script>

<style>
div .bar-loading {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
