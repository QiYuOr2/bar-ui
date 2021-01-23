<template>
  <div class="tabs-container">
    <h2>Tabs 按钮组件</h2>
    <bar-tabs v-model="tabActive">
      <bar-tab :index="1" title="水平标签栏">标签内容1</bar-tab>
      <bar-tab :index="2" :disabled="true" title="禁用">标签内容2</bar-tab>
      <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
    </bar-tabs>
    <bar-tabs type="underline">
      <bar-tab :index="1" title="下划线样式">标签内容1</bar-tab>
      <bar-tab :index="2" title="标签2">标签内容2</bar-tab>
      <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
    </bar-tabs>
    <bar-tabs mode="vertical">
      <bar-tab :index="1" title="垂直标签栏">标签内容1</bar-tab>
      <bar-tab :index="2" title="标签2">标签内容2</bar-tab>
      <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
    </bar-tabs>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Tabs, Tab } from '../../components';
import TabsMd from './markdown/tabs.md';
export default {
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    md: TabsMd,
  },
  setup() {
    const tabActive = ref(1);
    return { tabActive };
  },
};
</script>

<style>
.tabs-container .bar-tabs {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
