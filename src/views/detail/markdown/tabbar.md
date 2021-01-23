```html
<template>
  <div>
    <div style="margin-bottom: 1rem">{{ tabbarActive }}</div>
    <bar-tabbar v-model="tabbarActive" :fixed="false">
      <bar-item type="tabbar" name="home" icon="home">首页</bar-item>
      <bar-item type="tabbar" name="user" icon="user" dot>用户</bar-item>
      <bar-item type="tabbar" name="menu" icon="bars" :badge="5">
        菜单
      </bar-item>
      <bar-item type="tabbar" name="setting" icon="setting" :badge="15">
        设置
      </bar-item>
    </bar-tabbar>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Item, Tabbar } from 'bar-ui';

  export default {
    components: {
      [Tabbar.name]: Tabbar,
      [Item.name]: Item,
    },
    setup() {
      const tabbarActive = ref('home');
      return { tabbarActive };
    },
  };
</script>
```

## API

| 参数    | 说明                     | 类型    | 可选值 | 默认值 |
| :------ | :----------------------- | :------ | :----- | :----- |
| v-model | 当前活动的 item 的 value | string  |        |        |
| fixed   | 是否固定在底部           | boolean |        | true   |

## Events

| 参数   | 说明            | 函数签名               |
| :----- | :-------------- | :--------------------- |
| change | item 活动项改变 | (name: string) => void |

> Item 组件详见 Item 组件文档
