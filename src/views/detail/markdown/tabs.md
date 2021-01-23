```html
<template>
  <div>
    <bar-tabs v-model="tabActive">
      <bar-tab :index="1" title="水平标签栏">标签内容1</bar-tab>
      <bar-tab :index="2" :disabled="true" title="禁用">标签内容2</bar-tab>
      <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
    </bar-tabs>
    <bar-tabs type="underline">
      <bar-tab :index="1" title="下划线样式">标签内容1</bar-tab>
      <bar-tab :index="2" title="标签2">标签内容2</bar-tab>
      <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
    </bar-tabs>
    <bar-tabs mode="vertical">
      <bar-tab :index="1" title="垂直标签栏">标签内容1</bar-tab>
      <bar-tab :index="2" title="标签2">标签内容2</bar-tab>
      <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
    </bar-tabs>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Tabs, Tab } from 'bar-ui';

  export default {
    components: {
      [Tabs.name]: Tabs,
    },
    setup() {
      const tabActive = ref(1);
      return { tabActive };
    },
  };
</script>
```

## Tabs API

| 参数    | 说明          | 类型   | 可选值                     | 默认值     |
| :------ | :------------ | :----- | :------------------------- | :--------- |
| v-model | 活动的 tab 页 | number |                            |            |
| mode    | 排列模式      | string | 'horizontal' \| 'vertical' | horizontal |
| type    | tab 栏类型    | string | 'border' \| 'underline'    | border     |

## Tab API

| 参数     | 说明   | 类型    | 可选值 | 默认值 |
| :------- | :----- | :------ | :----- | :----- |
| index    | 标识符 | number  |        |        |
| title    | 标题   | string  |        |        |
| disabled | 禁用   | boolean |        | false  |

## Tab Slots

| 名称  | 说明 |
| :---- | :--- |
| title | 标题 |
