<template>
  <div>
    <h2>Sidebar 侧边栏组件</h2>
    <bar-sidebar
      v-model="sidebarVal"
      style="width: 200px"
      :value="sidebar"
      accordion
      header="导航"
      footer="Copyright © Tuzilow"
    />
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
  setup() {
    const sidebar = [
      { label: '侧边栏1', icon: 'home', name: 'test1' },
      {
        label: '侧边栏2',
        icon: 'menu',
        name: 'test2',
        subItems: [
          {
            label: '侧边栏2-1',
            icon: 'heart',
            name: 'test3',
            subItems: [{ label: '侧边栏2-1-1', name: 'test4' }],
          },
        ],
      },
      {
        label: '侧边栏3',
        icon: 'user',
        name: 'test5',
        subItems: [
          { label: '侧边栏3-1', name: 'test6' },
          { label: '侧边栏3-2', name: 'test7' },
        ],
      },
    ];
    return { sidebar };
  },
};
</script>

<style>
div .bar-sidebar {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
