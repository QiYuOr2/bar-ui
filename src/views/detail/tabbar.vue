<template>
  <div>
    <h2>Tabbar 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Tabbar } from '../../components';
import TabbarMd from './markdown/tabbar.md';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    md: TabbarMd,
  },
};
</script>

<style>
div .bar-tabbar {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
