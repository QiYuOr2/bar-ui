<template>
  <div>
    <h2>Tabbar 底部标签栏组件</h2>
    <div style="margin-bottom: 1rem">{{ tabbarActive }}</div>
    <bar-tabbar v-model="tabbarActive" :fixed="false">
      <bar-item type="tabbar" name="home" icon="home">首页</bar-item>
      <bar-item type="tabbar" name="user" icon="user" dot>用户</bar-item>
      <bar-item type="tabbar" name="menu" icon="bars" :badge="5">
        菜单
      </bar-item>
      <bar-item type="tabbar" name="setting" icon="setting" :badge="15">
        设置
      </bar-item>
    </bar-tabbar>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Item, Tabbar } from '../../components';
import TabbarMd from './markdown/tabbar.md';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [Item.name]: Item,
    md: TabbarMd,
  },
  setup() {
    const tabbarActive = ref('home');
    return { tabbarActive };
  },
};
</script>

<style>
div .bar-tabbar {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
