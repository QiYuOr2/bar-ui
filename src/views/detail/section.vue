<template>
  <div>
    <h2>Section 分区组件</h2>
    <bar-section title="分区1">
      <div>内容1</div>
    </bar-section>
    <bar-section title="分区2">
      <div>内容2</div>
    </bar-section>
    <bar-section title="分区3">
      <div>内容3</div>
    </bar-section>
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
