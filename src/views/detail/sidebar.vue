<template>
  <div>
    <h2>Sidebar 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Sidebar } from '../../components';
import SidebarMd from './markdown/sidebar.md';
export default {
  components: {
    [Sidebar.name]: Sidebar,
    md: SidebarMd,
  },
};
</script>

<style>
div .bar-sidebar {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
