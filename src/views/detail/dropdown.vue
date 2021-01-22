<template>
  <div>
    <h2>Dropdown 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Dropdown } from '../../components';
import DropdownMd from './markdown/dropdown.md';
export default {
  components: {
    [Dropdown.name]: Dropdown,
    md: DropdownMd,
  },
};
</script>

<style>
div .bar-dropdown {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
