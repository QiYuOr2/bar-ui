<template>
  <div>
    <h2>Textarea 按钮组件</h2>
    <bar-textarea
      v-model="textarea"
      :rows="5"
      :cols="30"
      placeholder="自定义行列数"
    />
    <bar-textarea v-model="textarea" :row="5" placeholder="占满宽度" block />
    <bar-textarea placeholder="有错误" has-fail :maxlength="5" />
    <bar-textarea placeholder="禁用" disabled />
    <bar-textarea placeholder="只读" readonly />
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Textarea } from '../../components';
import TextareaMd from './markdown/textarea.md';
export default {
  components: {
    [Textarea.name]: Textarea,
    md: TextareaMd,
  },
  setup() {
    const textarea = ref('');
    return { textarea };
  },
};
</script>

<style>
div .bar-textarea {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
