<template>
  <div>
    <h2>Header 页头组件</h2>
    <bar-header title="普通页头" />
    <bar-header title="普通页头" sub-title="有子标题的页头" />
    <bar-header
      title="普通页头"
      sub-title="有返回按钮的页头"
      left-text="返回"
      :left-arrow="true"
    />
    <bar-header title="都可以自定义" sub-title="有右侧按钮的页头">
      <template #left>自定义</template>
      <template #right>自定义</template>
    </bar-header>
    <bar-header
      title="自定义颜色"
      color="#fff"
      text-color="#000"
      left-text="返回"
      :left-arrow="true"
    />
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Header } from '../../components';
import HeaderMd from './markdown/header.md';
export default {
  components: {
    [Header.name]: Header,
    md: HeaderMd,
  },
};
</script>

<style>
div .bar-header {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
