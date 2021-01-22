<template>
  <div class="home-container">
    <bar-header left-text="BAR UI" fixed />
    <div class="container">
      <bar-sidebar
        class="sidebar"
        :value="sidbar"
        footer="copyright © Tuzilow"
      />
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { Sidebar, Header } from '../components';

export default {
  components: {
    [Sidebar.name]: Sidebar,
    [Header.name]: Header,
  },
  setup() {
    const sidbar = [
      { label: '快速开始', name: 'quickstart' },
      {
        label: '基础组件',
        name: 'basecomponent',
        subItems: [
          { label: 'avatar 头像', name: 'avatar' },
          { label: 'button 按钮', name: 'button' },
          { label: 'icon 图标', name: 'icon' },
          { label: 'item 单元项', name: 'item' },
          { label: 'divider 分割线', name: 'divider' },
          { label: 'message 轻提示', name: 'message' },
        ],
      },
      {
        label: '表单组件',
        name: 'formcomponent',
        subItems: [
          { label: 'input 输入框', name: 'input' },
          { label: 'radio 单选', name: 'radio' },
          { label: 'checkbox 多选', name: 'checkbox' },
          { label: 'select 选择器', name: 'select' },
          { label: 'switch 开关', name: 'switch' },
          { label: 'textarea 多行输入框', name: 'textarea' },
        ],
      },
      {
        label: '展示组件',
        name: 'showomponent',
        subItems: [
          { label: 'alert 警告提示', name: 'alert' },
          { label: 'card 卡片', name: 'card' },
          { label: 'collapse 折叠面板', name: 'collapse' },
          { label: 'dialog 弹出框', name: 'dialog' },
          { label: 'dropdown 下拉菜单', name: 'dropdown' },
          { label: 'header 页头', name: 'header' },
          { label: 'infinite-scroll 无限列表', name: 'infinite' },
          { label: 'loading 加载', name: 'loading' },
          { label: 'modal 模态框', name: 'modal' },
          { label: 'section 分区', name: 'section' },
          { label: 'sidebar 侧边栏', name: 'sidebar' },
          { label: 'tabbar 底部栏', name: 'tabbar' },
          { label: 'tabs 标签页', name: 'tabs' },
        ],
      },
    ];
    return { sidbar };
  },
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.home-container {
  .bar-header {
    &__left {
      padding-left: 1rem;
      span {
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
  .container {
    display: flex;
    .sidebar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding-left: 10px;
      padding-top: 20px;
      height: calc(100vh - 46px);
      width: 200px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
    }
    .content {
      flex: 8;
    }
  }
}
</style>
