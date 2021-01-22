---
to: src/views/detail/<%= h.changeCase.lcFirst(name) %>.vue
---
<template>
  <div>
    <h2><%= name %> 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { <%= name %> } from '../../components';
import <%= name %>Md from './markdown/<%= h.changeCase.lcFirst(name) %>.md';
export default {
  components: {
    [<%= name %>.name]: <%= name %>,
    md: <%= name %>Md,
  },
};
</script>

<style>
div .bar-<%= h.changeCase.lcFirst(name) %> {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
