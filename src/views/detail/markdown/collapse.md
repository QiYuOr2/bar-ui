```html
<template>
  <div>
    <bar-collapse>
      <bar-panel title="基本使用" :index="1">
        代码写出来是给人看的，附带能够在机器上运行
      </bar-panel>
      <bar-panel :index="2">
        <template #title>slot标题</template>
        测试2
      </bar-panel>
      <bar-panel title="标题3" :index="3">
        <bar-collapse :accordion="true" v-model="activeIndex">
          <bar-panel :title="`双向绑定activeIndex: ${activeIndex}`" :index="1">
            代码写出来是给人看的，附带能够在机器上运行
          </bar-panel>
          <bar-panel title="标题2" :index="2">测试2</bar-panel>
          <bar-panel title="标题3" :index="3">测试3</bar-panel>
        </bar-collapse>
      </bar-panel>
    </bar-collapse>
    <bar-collapse :accordion="true" v-model="activeIndex">
      <bar-panel :title="`手风琴模式，activeIndex: ${activeIndex}`" :index="1">
        代码写出来是给人看的，附带能够在机器上运行
      </bar-panel>
      <bar-panel title="标题2" :index="2">测试2</bar-panel>
      <bar-panel title="标题3" :index="3">测试3</bar-panel>
    </bar-collapse>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Collapse, Panel } from 'bar-ui';

  export default {
    components: {
      [Collapse.name]: Collapse,
      [Panel.name]: Panel,
    },
    setup() {
      const activeIndex = ref();
      return { activeIndex };
    },
  };
</script>
```

## Panel API

| 参数  | 说明   | 类型           | 可选值 | 默认值 |
| :---- | :----- | :------------- | :----- | :----- |
| title | 标题   | string         |        |        |
| index | 标识符 | number\|string |        |        |

## Panel Events

| 参数  | 说明 | 函数签名                    |
| :---- | :--- | :-------------------------- |
| open  | 打开 | (event: MouseEvent) => void |
| close | 关闭 | (event: MouseEvent) => void |

## Panel Slots

| 名称  | 说明 |
| :---- | :--- |
| title | 标题 |

## Collapse API

| 参数      | 说明                      | 类型           | 可选值 | 默认值 |
| :-------- | :------------------------ | :------------- | :----- | :----- |
| v-model   | 当前活动的 panel 的标识符 | number\|string |        |        |
| accordion | 是否打开手风琴模式        | boolean        |        | false  |
