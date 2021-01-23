<template>
  <div>
    <h2>Card 卡片组件</h2>
    <bar-card style="margin-bottom: 1rem" title="卡片标题">卡片内容</bar-card>
    <bar-card-stack
      class="stack"
      :data="data"
      :fly-distance="1000"
      :limit-distance="100"
      :base-card-style="{ width: 300, height: 100, top: 0, left: 0 }"
      dragDirection="horizontal"
    >
    </bar-card-stack>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Card, CardStack } from '../../components';
import CardMd from './markdown/card.md';
export default {
  components: {
    [Card.name]: Card,
    [CardStack.name]: CardStack,
    md: CardMd,
  },
  setup() {
    const data = [
      { title: '卡1', content: '卡片堆叠滑动效果只有手机端有用' },
      { title: '卡2', content: '内容2' },
      { title: '卡3', content: '内容3' },
      { title: '卡4', content: '内容4' },
      { title: '卡5', content: '内容5' },
      { title: '卡6', content: '内容6' },
      { title: '卡7', content: '内容7' },
    ];
    return { data };
  },
};
</script>

<style>
div .bar-card {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.stack {
  margin-bottom: 150px;
}
</style>
