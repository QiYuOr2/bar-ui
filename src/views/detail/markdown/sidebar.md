```html
<template>
  <div>
    <bar-sidebar
      v-model="sidebarVal"
      style="width: 200px"
      :value="sidebar"
      accordion
      header="导航"
      footer="Copyright © Tuzilow"
    />
  </div>
</template>

<script>
  import { Sidebar } from 'bar-ui';

  export default {
    components: {
      [Sidebar.name]: Sidebar,
    },
    setup() {
      const sidebar = [
        { label: '侧边栏1', icon: 'home', name: 'test1' },
        {
          label: '侧边栏2',
          icon: 'menu',
          name: 'test2',
          subItems: [
            {
              label: '侧边栏2-1',
              icon: 'heart',
              name: 'test3',
              subItems: [{ label: '侧边栏2-1-1', name: 'test4' }],
            },
          ],
        },
        {
          label: '侧边栏3',
          icon: 'user',
          name: 'test5',
          subItems: [
            { label: '侧边栏3-1', name: 'test6' },
            { label: '侧边栏3-2', name: 'test7' },
          ],
        },
      ];
      return { sidebar };
    },
  };
</script>
```

## API

| 参数      | 说明               | 类型           | 可选值 | 默认值 |
| :-------- | :----------------- | :------------- | :----- | :----- |
| v-model   | 当前活动的侧边栏项 | string\|number |        |        |
| value     | 侧边栏数据         | SidebarItem[]  |        |        |
| accordion | 是否为手风琴模式   | boolean        |        | false  |
| header    | 侧边栏顶部         | stirng         |        |        |
| footer    | 侧边栏底部         | stirng         |        |        |

## SidebarItem

```typescript
type SidebarItem = {
  label: string; // 侧边栏项显示的文字
  name: string | number; // 标识符
  icon?: IconName; // 图标
  subItems?: SidebarItem[]; // 侧边栏项的子项
  onClick?: (event: MouseEvent) => void; // 点击事件
};
```

## Slots

| 名称   | 说明       |
| :----- | :--------- |
| header | 侧边栏顶部 |
| footer | 侧边栏底部 |
