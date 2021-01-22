```html
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
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Button, CheckboxGroup, Checkbox } from '../../components';
  export default {
    components: {
      [Button.name]: Button,
      [CheckboxGroup.name]: CheckboxGroup,
      [Checkbox.name]: Checkbox,
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
```

## CheckboxGroup API

| 参数    | 说明                                  | 类型      | 可选值               | 默认值     |
| :------ | :------------------------------------ | :-------- | :------------------- | :--------- |
| v-model | 当前 group 内选中的 checkout 的 value | unknown[] |                      |            |
| name    | input[type="radio"] 的 name           | string    |                      |            |
| mode    | 排列方式                              | string    | horizontal, vertical | horizontal |

## CheckboxGroup Events

| 参数   | 说明           | 函数签名                 |
| :----- | :------------- | :----------------------- |
| change | radio 选中改变 | (value: unknown) => void |

## Checkbox API

| 参数     | 说明              | 类型           | 可选值 | 默认值 |
| :------- | :---------------- | :------------- | :----- | :----- |
| value    | Checkbox 的 value | string\|number |        |        |
| disabled | 是否可用          | boolean        |        | false  |
| checked  | 是否选择          | boolean        |        | false  |

## Checkbox Event

| 参数  | 说明 | 函数签名                                                                   |
| :---- | :--- | :------------------------------------------------------------------------- |
| click | 点击 | ({ event, value }: { event: MouseEvent; value: string \| number }) => void |
