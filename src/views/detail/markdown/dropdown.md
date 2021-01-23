```html
<template>
  <div>
    <bar-dropdown
      button-title="基本使用"
      button-type="primary"
      :button-shadow="false"
      :show-icon="false"
      dropdown-position="rightdown"
    >
      <bar-item
        type="dropdown"
        v-for="(item, index) in ['吃饭', '睡觉', '打豆豆']"
        :key="index"
      >
        {{ item }}
      </bar-item>
    </bar-dropdown>
    <bar-dropdown
      button-title="有箭头"
      button-type="primary"
      :button-shadow="false"
      dropdown-position="rightdown"
      @open="handleClick2"
      @close="handleClick1"
    >
      <bar-item
        :icon="item % 2 ? 'up' : 'down'"
        type="dropdown"
        v-for="item in 5"
        :key="item"
      >
        这是下拉菜单{{ item }}
      </bar-item>
    </bar-dropdown>
    <bar-dropdown
      button-title="适用按钮样式"
      button-type="danger"
      :button-shadow="false"
      dropdown-position="rightdown"
    >
      <bar-item icon="heart" type="dropdown" v-for="item in 4" :key="item">
        这是下拉菜单{{ item }}
      </bar-item>
    </bar-dropdown>
  </div>
</template>

<script>
  import { Dropdown, Item } from 'bar-ui';

  export default {
    components: {
      [Dropdown.name]: Dropdown,
      [Item.name]: Item,
    },
  };
</script>
```

## API

| 参数              | 说明                 | 类型    | 可选值              | 默认值   |
| :---------------- | :------------------- | :------ | :------------------ | :------- |
| button-title      | 按钮标题             | string  |                     | ''       |
| button-shadow     | 是否显示按钮阴影     | boolean |                     | true     |
| button-type       | 按钮类型             | string  | 按钮的所有类型      | default  |
| show-icon         | 是否显示右侧向下箭头 | boolean |                     | true     |
| dropdown-position | 下拉菜单位置         | string  | leftDown\|rightDown | leftDown |

## Events

| 参数  | 说明 | 函数签名                    |
| :---- | :--- | :-------------------------- |
| open  | 打开 | (event: MouseEvent) => void |
| close | 关闭 | (event: MouseEvent) => void |

> Item 组件详见 Item 组件文档
