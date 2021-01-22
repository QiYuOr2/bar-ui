```html
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
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Button, Radio, RadioGroup } from '../../components';
  export default {
    components: {
      [Button.name]: Button,
      [Radio.name]: Radio,
      [RadioGroup.name]: RadioGroup,
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
```

## RadioGroup API

| 参数    | 说明                              | 类型   | 可选值               | 默认值     |
| :------ | :-------------------------------- | :----- | :------------------- | :--------- |
| v-model | 当前 group 内选中的 radio 的 value | string |                      |            |
| name    | input[type="radio"] 的 name       | string |                      |            |
| mode    | 排列方式                          | string | horizontal, vertical | horizontal |

## RadioGroup Events

| 参数   | 说明           | 函数签名                 |
| :----- | :------------- | :----------------------- |
| change | radio 选中改变 | (value: unknown) => void |

## Radio API

| 参数     | 说明           | 类型           | 可选值 | 默认值 |
| :------- | :------------- | :------------- | :----- | :----- |
| value    | radio 的 value | string\|number |        |        |
| disabled | 是否可用       | boolean        |        | false  |
| checked  | 是否选择       | boolean        |        | false  |

## Radio Event

| 参数  | 说明 | 函数签名                                                                   |
| :---- | :--- | :------------------------------------------------------------------------- |
| click | 点击 | ({ event, value }: { event: MouseEvent; value: string \| number }) => void |
