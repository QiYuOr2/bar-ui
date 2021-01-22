<template>
  <div>
    <h2>Section 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Section } from '../../components';
import SectionMd from './markdown/section.md';
export default {
  components: {
    [Section.name]: Section,
    md: SectionMd,
  },
};
</script>

<style>
div .bar-section {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
