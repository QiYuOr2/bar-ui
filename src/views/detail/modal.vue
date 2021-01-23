<template>
  <div class="modal-container">
    <h2>Modal 模态框组件</h2>
    <bar-button @click="visible = true">基本模态框</bar-button>
    <bar-button @click="notice = true">通知框</bar-button>
    <bar-button @click="noMask = true">无遮罩</bar-button>
    <bar-modal title="模态框标题" v-model="visible">模态框</bar-modal>
    <bar-modal type="notice" title="通知" v-model="notice">
      <div style="margin-bottom: 10px">
        1.
        更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公
      </div>
      <div>
        2.
        更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更
      </div>
    </bar-modal>
    <bar-modal title="模态框标题" v-model="noMask" :show-mask="false">
      模态框
    </bar-modal>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Button, Modal } from '../../components';
import ModalMd from './markdown/modal.md';
export default {
  components: {
    [Modal.name]: Modal,
    [Button.name]: Button,
    md: ModalMd,
  },
  setup() {
    const visible = ref(false);
    const notice = ref(false);
    const noMask = ref(false);
    return { visible, notice, noMask };
  },
};
</script>

<style>
.modal-container .bar-modal,
.modal-container .bar-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
