<template>
  <div class="checkbox-container">
    <h2>Checkbox 多选组件</h2>
    <bar-button @click="clearCheckbox" size="sm" inline>清空</bar-button>
    <span>已选：{{ checkboxValue }}</span>
    <bar-checkbox-group v-model="checkboxValue" name="something">
      <bar-checkbox :value="1">看电视</bar-checkbox>
      <bar-checkbox :value="2">玩电脑</bar-checkbox>
      <bar-checkbox :value="3">玩手机</bar-checkbox>
      <bar-checkbox :value="4" disabled>睡觉</bar-checkbox>
      <bar-checkbox :value="5" checked disabled>吃饭</bar-checkbox>
    </bar-checkbox-group>

    <bar-checkbox-group name="some" mode="vertical">
      <bar-checkbox :value="1">看电视</bar-checkbox>
      <bar-checkbox :value="2">玩电脑</bar-checkbox>
      <bar-checkbox :value="3">玩手机</bar-checkbox>
      <bar-checkbox :value="4" disabled>睡觉</bar-checkbox>
      <bar-checkbox :value="5" checked disabled>吃饭</bar-checkbox>
    </bar-checkbox-group>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Button, CheckboxGroup, Checkbox } from '../../components';
import CheckboxMd from './markdown/checkbox.md';
export default {
  components: {
    [Button.name]: Button,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    md: CheckboxMd,
  },
  setup() {
    const checkboxValue = ref([1]);

    const clearCheckbox = () => {
      checkboxValue.value = [];
    };

    return { checkboxValue, clearCheckbox };
  },
};
</script>

<style>
.checkbox-container .bar-checkbox,
.checkbox-container .bar-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
