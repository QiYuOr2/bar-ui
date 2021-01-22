<template>
  <div>
    <h2>Collapse 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Collapse } from '../../components';
import CollapseMd from './markdown/collapse.md';
export default {
  components: {
    [Collapse.name]: Collapse,
    md: CollapseMd,
  },
};
</script>

<style>
div .bar-collapse {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
