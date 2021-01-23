```html
<template>
  <div>
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
  </div>
</template>

<script>
  import { Card, CardStack } from 'bar-ui';

  export default {
    components: {
      [Card.name]: Card,
      [CardStack.name]: CardStack,
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
```

## Card API

| 参数         | 说明           | 类型   | 可选值 | 默认值 |
| :----------- | :------------- | :----- | :----- | :----- |
| title        | 标题           | string |        |        |
| title-class  | 标题自定义类名 | string |        |        |
| footer-class | 底部自定义类名 | string |        |        |

## Card Events

| 参数        | 说明     | 函数签名                    |
| :---------- | :------- | :-------------------------- |
| touchstart  | 开始触摸 | (event: TouchEvent) => void |
| touchmove   | 触摸移动 | (event: TouchEvent) => void |
| touchcancel | 取消触摸 | (event: TouchEvent) => void |

## Card Slots

| 名称   | 说明 |
| :----- | :--- |
| title  | 标题 |
| footer | 底部 |

## CardStack 类型

```typescript
type CardDragDirection = 'all' | 'horizontal' | 'vertical';
type CardData = {
  title?: string;
  content: string;
};
type CardStyle = {
  width: number;
  height: number;
  top: number;
  left: number;
};
```

## CardStack API

| 参数            | 说明               | 类型              | 可选值 | 默认值 |
| :-------------- | :----------------- | :---------------- | :----- | :----- |
| data            | 卡片堆数据         | CardData[]        |        |        |
| fly-distance    | 最大飞行距离       | number            |        | 1000   |
| limit-distance  | 最小触发飞出的距离 | number            |        | 100    |
| drag-direction  | 可以拖动的方向     | CardDragDirection |        | all    |
| base-card-style | 定位卡的样式       | CardStyle         |        |        |

## CardStack Events

| 参数      | 说明     | 函数签名                               |
| :-------- | :------- | :------------------------------------- |
| dragStart | 开始拖动 | () => void                             |
| dragStop  | 停止拖动 | (finishPosition: CardPosition) => void |
| dragMove  | 拖动     | (movingPosision: CardPosition) => void |
| flyFail   | 飞出失败 | () => void                             |
| flyStart  | 开始飞出 | () => void                             |
| flyDone   | 飞出结束 | () => void                             |
