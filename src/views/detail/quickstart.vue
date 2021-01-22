<template>
  <pre v-highlightjs>
    <quick />
  </pre>
</template>

<script>
import quick from './markdown/quickmd.md';
export default {
  components: {
    quick,
  },
};
</script>

<style></style>
