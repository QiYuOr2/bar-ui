<template>
  <div>
    <h2>Tabs 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Tabs } from '../../components';
import TabsMd from './markdown/tabs.md';
export default {
  components: {
    [Tabs.name]: Tabs,
    md: TabsMd,
  },
};
</script>

<style>
div .bar-tabs {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
