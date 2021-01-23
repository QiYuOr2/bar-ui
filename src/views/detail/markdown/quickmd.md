## 快速开始

本项目使用 vue3、vite 和 typescript 开发，并且采用了 jsx 语法进行组件开发

> 文档编写时的环境：
> 
> - vue v3.0.5
> - vite v2.0.0-beta.35

### 注意

当前 UI 库仅 vite 创建的 vue 项目可以使用

[vite 官方文档](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
# 创建vite项目
npm init @vitejs/app my-app
#or yarn create @vitejs/app

cd my-app

npm i
```

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
