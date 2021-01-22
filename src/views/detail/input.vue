<template>
  <div>
    <h2>Input 组件</h2>
    <bar-input
      v-model="input"
      placeholder="请输入文本，可以加icon"
      prefix-icon="success"
      suffix-icon="error"
    />
    <bar-input placeholder="只能输入数字" type="number">
      <template #prefix>你好</template>
    </bar-input>
    <bar-input placeholder="请输入密码" type="password">
      <template #suffix>不准偷看</template>
    </bar-input>
    <bar-input placeholder="有错误" has-fail />
    <bar-input placeholder="不可用" disabled />
    <bar-input placeholder="只读" readonly />
    <bar-input placeholder="行内输入框" inline />
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Input } from '../../components';
import InputMd from './markdown/input.md';
export default {
  components: {
    [Input.name]: Input,
    md: InputMd,
  },
  setup() {
    const input = ref('');
    return { input };
  },
};
</script>

<style>
div .bar-input {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
