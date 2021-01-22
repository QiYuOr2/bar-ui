<template>
  <div class="radio-container">
    <h2>Radio 组件</h2>
    <bar-button @click="changeRadio" size="sm">切换</bar-button>
    <span>已选：{{ radioValue }}</span>
    <bar-radio-group name="test" v-model="radioValue" @change="radioChange">
      <bar-radio :value="1">鸡肉</bar-radio>
      <bar-radio :value="2">猪肉</bar-radio>
      <bar-radio :value="3">羊肉</bar-radio>
    </bar-radio-group>
    <bar-radio-group name="test2" mode="vertical">
      <bar-radio value="5" disabled>苹果</bar-radio>
      <bar-radio value="6" disabled checked>梨</bar-radio>
    </bar-radio-group>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Button, Radio, RadioGroup } from '../../components';
import RadioMd from './markdown/radio.md';
export default {
  components: {
    [Button.name]: Button,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    md: RadioMd,
  },
  setup() {
    const radioValue = ref();
    const changeRadio = () => {
      if (radioValue.value > 2 || !radioValue.value) {
        radioValue.value = 1;
      } else {
        radioValue.value += 1;
      }
    };

    const radioChange = (value) => {
      console.log('radioChange() ', value);
    };
    return { radioValue, changeRadio, radioChange };
  },
};
</script>

<style>
.radio-container .bar-radio,
.radio-container .bar-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
