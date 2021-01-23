<template>
  <div class="dropdown-container">
    <h2>Dropdown 下拉菜单组件</h2>
    <bar-dropdown
      button-title="基本使用"
      button-type="primary"
      :button-shadow="false"
      :show-icon="false"
      dropdown-position="rightdown"
    >
      <bar-item
        type="dropdown"
        v-for="(item, index) in ['吃饭', '睡觉', '打豆豆']"
        :key="index"
      >
        {{ item }}
      </bar-item>
    </bar-dropdown>
    <bar-dropdown
      button-title="有箭头"
      button-type="primary"
      :button-shadow="false"
      dropdown-position="rightdown"
      @open="handleClick2"
      @close="handleClick1"
    >
      <bar-item
        :icon="item % 2 ? 'up' : 'down'"
        type="dropdown"
        v-for="item in 5"
        :key="item"
      >
        这是下拉菜单{{ item }}
      </bar-item>
    </bar-dropdown>
    <bar-dropdown
      button-title="适用按钮样式"
      button-type="danger"
      :button-shadow="false"
      dropdown-position="rightdown"
    >
      <bar-item icon="heart" type="dropdown" v-for="item in 4" :key="item">
        这是下拉菜单{{ item }}
      </bar-item>
    </bar-dropdown>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Dropdown, Item } from '../../components';
import DropdownMd from './markdown/dropdown.md';
export default {
  components: {
    [Dropdown.name]: Dropdown,
    [Item.name]: Item,
    md: DropdownMd,
  },
};
</script>

<style>
.dropdown-container .bar-dropdown {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
