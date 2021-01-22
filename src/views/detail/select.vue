<template>
  <div class="select-container">
    <h2>Select 按钮组件</h2>
    <div>对应的value：{{ selectVal || '暂未选择' }}</div>
    <bar-select v-model="selectVal" name="city" placeholder="可输入检索">
      <bar-option label="河南" :value="1" />
      <bar-option label="河北" :value="2" />
      <bar-option label="湖南" :value="3" />
      <bar-option label="湖北" :value="4" />
    </bar-select>
    <bar-select name="b" placeholder="可清除" clearable :default-value="1">
      <bar-option label="默认选项" :value="1" />
      <bar-option label="选项2" :value="2" />
    </bar-select>
    <bar-select name="a" placeholder="禁用" disabled>
      <bar-option label="选项1" :value="1" />
      <bar-option label="选项2" :value="2" />
    </bar-select>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Select, Option } from '../../components';
import SelectMd from './markdown/select.md';
export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    md: SelectMd,
  },
  setup() {
    const selectVal = ref('');
    return { selectVal };
  },
};
</script>

<style>
.select-container .bar-select,
.select-container > div {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
