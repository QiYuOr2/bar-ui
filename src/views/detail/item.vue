<template>
  <div>
    <h2>Item 组件</h2>
    <bar-item>Hello</bar-item>
    <bar-item>world</bar-item>
    <pre v-highlightjs><md /></pre>
  </div>
</template>

<script>
import { Item } from '../../components';
import ItemMd from './markdown/item.md';
export default {
  components: {
    [Item.name]: Item,
    md: ItemMd,
  },
};
</script>

<style></style>
