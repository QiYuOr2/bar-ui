<template>
  <div>
    <h2>Modal 按钮组件</h2>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Modal } from '../../components';
import ModalMd from './markdown/modal.md';
export default {
  components: {
    [Modal.name]: Modal,
    md: ModalMd,
  },
};
</script>

<style>
div .bar-modal {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
