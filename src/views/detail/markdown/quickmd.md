## 快速开始

本项目使用 vue3、rollup 和 typescript 开发，没有设计风格，所有UI的样式都是随便做的。

> 文档编写时的环境：
>
> - vue v3.0.5


### 安装

```bash
npm install bar-ui
```

### 引入组件样式

```js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bar-ui/lib/index.css';

createApp(App).mount('#app');
```

### 使用组件

```js
// src/App.vue
<template>
  <div>
    <bar-header title="你好" fixed />
  </div>
</template>

<script>
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
