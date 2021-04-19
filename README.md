# BAR UI

使用 Vue3 和 Typescript 开发的 UI 库

## 安装

```bash
npm install bar-ui
```

## 快速开始

1. 引入所有样式

```js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bar-ui/lib/index.css';

createApp(App).mount('#app');
```

2. 引入组件

```vue
// src/App.vue
<template>
  <div>
    <bar-header title="你好" fixed />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Header } from 'bar-ui';

export default defineComponent({
  name: 'App',
  components: {
    [Header.name]: Header,
  },
});
</script>
```

## 演示及文档

[https://xmy6364.github.io/bar-ui](https://xmy6364.github.io/bar-ui/)

## LICENSE

[MIT](https://github.com/Tuzilow/bar-ui/blob/main/LICENSE)
