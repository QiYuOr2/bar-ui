<template>
  <div>
    <h2>Dialog 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Dialog } from '../../components';
import DialogMd from './markdown/dialog.md';
export default {
  components: {
    [Dialog.name]: Dialog,
    md: DialogMd,
  },
};
</script>

<style>
div .bar-dialog {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
