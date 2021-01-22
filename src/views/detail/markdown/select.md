```html
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
  export default {
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
    },
    setup() {
      const selectVal = ref('');
      return { selectVal };
    },
  };
</script>
```

## Select API

| 参数         | 说明             | 类型             | 可选值 | 默认值 |
| :----------- | :--------------- | :--------------- | :----- | :----- |
| v-model      | 当前选择的 value | string \| number |        |        |
| placeholder  | 占位文本         | string           |        |        |
| name         | 标识符           | string           |        |        |
| disabled     | 是否禁用         | string           |        | false  |
| clearable    | 是否可以清空     | string           |        | false  |
| autoFocus    | 自动获取焦点     | string           |        | false  |
| defaultValue | 默认值           | string \| number |        |        |

## Option API

| 参数  | 说明       | 类型             | 可选值 | 默认值 |
| :---- | :--------- | :--------------- | :----- | :----- |
| label | 显示的文本 | string           |        |        |
| value | 对应的值   | string \| number |        |        |

## Option Events

| 参数  | 说明         | 函数签名                    |
| :---- | :----------- | :-------------------------- |
| click | 按钮点击事件 | (event: MouseEvent) => void |
