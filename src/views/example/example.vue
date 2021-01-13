<template>
  <div class="example-container">
    <bar-header
      title="演示页"
      sub-title="演示页子标题"
      scroll-target="container"
      left-text="返回"
      @click-left="handleClick"
      @click-right="handleClick2"
      :left-arrow="true"
      fixed
    >
      <template #right>你好</template>
    </bar-header>
    <bar-section title="加载图标">
      <bar-icon name="loading" size="lg" />
      <bar-icon name="loading" />
      <bar-icon name="loading" size="sm" />
    </bar-section>
    <bar-section title="其他图标">
      <bar-icon name="left" size="sm" />
    </bar-section>
    <bar-section title="按钮组件">
      <bar-button>default按钮</bar-button>
      <bar-button type="primary">primary按钮</bar-button>
      <bar-button disabled @click="handleClick">禁用按钮</bar-button>
      <bar-button loading>loading按钮</bar-button>
      <bar-button type="warn">warn按钮</bar-button>
      <bar-button type="danger">danger按钮</bar-button>
      <bar-button type="link">link按钮</bar-button>
      <bar-button type="text">text按钮</bar-button>
      <bar-button size="lg">large按钮</bar-button>
      <bar-button type="primary" size="sm">small按钮</bar-button>
      <bar-button type="primary" size="sm" shape="circle">圆</bar-button>
      <bar-button type="primary" size="sm" shape="round">圆角</bar-button>
      <bar-button block @click="handleClick">block按钮</bar-button>
      <bar-button block shape="round" @click="handleClick">
        block round按钮
      </bar-button>
    </bar-section>
    <bar-section title="页头组件">
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
    </bar-section>
    <bar-section title="分割线">
      <bar-divider />
      <bar-divider>我是分割线</bar-divider>
      <bar-divider position="left">我是分割线靠左</bar-divider>
      <bar-divider position="right">我是分割线靠右</bar-divider>
      <div style="display: flex; align-items: center">
        我
        <bar-divider type="vertical" />
        是
        <bar-divider type="vertical" />
        分
        <bar-divider type="vertical" />
        割
        <bar-divider type="vertical" />
        线
      </div>
    </bar-section>
    <bar-section title="卡片组件">
      <bar-card style="margin-bottom: 1rem" title="卡片标题">卡片内容</bar-card>
      <bar-card-stack
        :data="data"
        :fly-distance="1000"
        :limit-distance="100"
        :base-card-style="{ width: 300, height: 100, top: 0, left: 0 }"
        dragDirection="horizontal"
      >
      </bar-card-stack>
    </bar-section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import header from '../../components/header';
import cardStack from '../../components/card-stack';
import card from '../../components/card';
import button from '../../components/button';
import icon from '../../components/icon';
import section from '../../components/section';
import divider from '../../components/divider';

export default {
  name: 'example',
  components: {
    [card.name]: card,
    [cardStack.name]: cardStack,
    [button.name]: button,
    [icon.name]: icon,
    [section.name]: section,
    [divider.name]: divider,
    [header.name]: header,
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
    const handleClick2 = (e) => {
      console.log(2, e);
    };

    return {
      data,
      handleClick,
      handleClick2,
    };
  },
};
</script>
<style lang="less">
.example-container {
  // padding: 1rem;
  & .bar-section .content > * {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
}
</style>
