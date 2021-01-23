<template>
  <div>
    <h2>Collapse 折叠面板组件</h2>
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
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Collapse, Panel } from '../../components';
import CollapseMd from './markdown/collapse.md';
export default {
  components: {
    [Collapse.name]: Collapse,
    [Panel.name]: Panel,
    md: CollapseMd,
  },
  setup() {
    const activeIndex = ref();
    return { activeIndex };
  },
};
</script>

<style>
div .bar-collapse {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
