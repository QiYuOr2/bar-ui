<template>
  <div class="example-container">
    <bar-icon name="loading" size="lg" />
    <bar-icon name="loading" />
    <bar-icon name="loading" size="sm" />
    <br />
    <bar-button size="lg">large按钮</bar-button>
    <bar-button>default按钮</bar-button>
    <bar-button type="primary">primary按钮</bar-button>
    <bar-button type="warn">warn按钮</bar-button>
    <bar-button type="danger">danger按钮</bar-button>
    <bar-button type="link">link按钮</bar-button>
    <bar-button type="text">text按钮</bar-button>
    <bar-button type="primary" size="sm">small按钮</bar-button>
    <bar-button block @click="handleClick">block按钮</bar-button>

    <bar-card style="margin-bottom: 1rem" title="卡片标题">卡片内容</bar-card>

    <bar-card-stack
      :data="data"
      :fly-distance="1000"
      :limit-distance="100"
      :base-card-style="{ width: 300, height: 100, top: 0, left: 0 }"
      dragDirection="horizontal"
    >
    </bar-card-stack>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import cardStack from '../../components/card-stack';
import card from '../../components/card';
import button from '../../components/button';
import icon from '../../components/icon';

export default {
  name: 'example',
  components: {
    [card.name]: card,
    [cardStack.name]: cardStack,
    [button.name]: button,
    [icon.name]: icon,
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

    const handleClick = (e) => {
      console.log(e);
    };

    return {
      data,
      handleClick,
    };
  },
};
</script>
<style lang="less">
.example-container {
  padding: 1rem;
  & > * {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
}
</style>
