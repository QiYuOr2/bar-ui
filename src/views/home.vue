<template>
  <div class="home-container">
    <bar-header left-text="BAR UI" fixed>
      <template #right>
        <div style="font-weight: bold; margin-right: 1rem" @click="toGithub">
          Github
        </div>
      </template>
    </bar-header>
    <div class="container">
      <bar-sidebar
        v-model="activeSide"
        class="sidebar"
        :value="sidebar"
        footer="copyright © xmy6364"
      />
      <main class="home-content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Sidebar, Header } from '../components';

export default {
  components: {
    [Sidebar.name]: Sidebar,
    [Header.name]: Header,
  },
  setup() {
    const router = useRouter();
    const activeSide = ref('quickstart');

    onMounted(() => {
      const path = router.currentRoute.value.path.replace('/', '');
      activeSide.value = path;
    });

    watch(router.currentRoute, (newValue) => {
      const path = newValue.path.replace('/', '');
      activeSide.value = path;
    });

    const sidebar = [
      {
        label: '快速开始',
        name: 'quickstart',
        onClick() {
          router.push('/');
        },
      },
      {
        label: '移动端演示',
        name: 'example',
        onClick() {
          router.push('example');
        },
      },
      {
        label: '基础组件',
        name: 'basecomponent',
        subItems: [
          {
            label: 'avatar 头像',
            name: 'avatar',
            onClick() {
              router.push('avatar');
            },
          },
          {
            label: 'button 按钮',
            name: 'button',
            onClick() {
              router.push('button');
            },
          },
          {
            label: 'icon 图标',
            name: 'icon',
            onClick() {
              router.push('icon');
            },
          },
          {
            label: 'item 单元项',
            name: 'item',
            onClick() {
              router.push('item');
            },
          },
          {
            label: 'divider 分割线',
            name: 'divider',
            onClick() {
              router.push('divider');
            },
          },
          {
            label: 'message 轻提示',
            name: 'message',
            onClick() {
              router.push('message');
            },
          },
        ],
      },
      {
        label: '表单组件',
        name: 'formcomponent',
        subItems: [
          {
            label: 'input 输入框',
            name: 'input',
            onClick() {
              router.push('input');
            },
          },
          {
            label: 'radio 单选',
            name: 'radio',
            onClick() {
              router.push('radio');
            },
          },
          {
            label: 'checkbox 多选',
            name: 'checkbox',
            onClick() {
              router.push('checkbox');
            },
          },
          {
            label: 'select 选择器',
            name: 'select',
            onClick() {
              router.push('select');
            },
          },
          {
            label: 'switch 开关',
            name: 'switch',
            onClick() {
              router.push('switch');
            },
          },
          {
            label: 'textarea 多行输入框',
            name: 'textarea',
            onClick() {
              router.push('textarea');
            },
          },
        ],
      },
      {
        label: '展示组件',
        name: 'showomponent',
        subItems: [
          {
            label: 'alert 警告提示',
            name: 'alert',
            onClick() {
              router.push('alert');
            },
          },
          {
            label: 'card 卡片',
            name: 'card',
            onClick() {
              router.push('card');
            },
          },
          {
            label: 'collapse 折叠面板',
            name: 'collapse',
            onClick() {
              router.push('collapse');
            },
          },
          {
            label: 'dialog 弹出框',
            name: 'dialog',
            onClick() {
              router.push('dialog');
            },
          },
          {
            label: 'dropdown 下拉菜单',
            name: 'dropdown',
            onClick() {
              router.push('dropdown');
            },
          },
          {
            label: 'header 页头',
            name: 'header',
            onClick() {
              router.push('header');
            },
          },
          {
            label: 'infinite-scroll 无限列表',
            name: 'infinite',
            onClick() {
              router.push('infinite');
            },
          },
          {
            label: 'loading 加载',
            name: 'loading',
            onClick() {
              router.push('loading');
            },
          },
          {
            label: 'modal 模态框',
            name: 'modal',
            onClick() {
              router.push('modal');
            },
          },
          {
            label: 'section 分区',
            name: 'section',
            onClick() {
              router.push('section');
            },
          },
          {
            label: 'sidebar 侧边栏',
            name: 'sidebar',
            onClick() {
              router.push('sidebar');
            },
          },
          {
            label: 'tabbar 底部栏',
            name: 'tabbar',
            onClick() {
              router.push('tabbar');
            },
          },
          {
            label: 'tabs 标签页',
            name: 'tabs',
            onClick() {
              router.push('tabs');
            },
          },
        ],
      },
      {
        label: '锚点API',
        name: 'anchor',
        onClick() {
          router.push('anchor');
        },
      },
    ];

    const toGithub = () => {
      location.href = 'https://github.com/Tuzilow/bar-ui';
    };
    return { sidebar, toGithub, activeSide };
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
  overflow-y: hidden;
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
      margin-bottom: 0;
      height: calc(100vh - 46px);
      width: 250px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
    }
    .home-content {
      * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
      }
      height: calc(100vh - 46px);
      flex: 8;
      padding-left: 8%;
      padding-right: 8%;
      padding-bottom: 20px;
      font-size: 14px;
      overflow: auto;
      pre {
        margin: 0;
        table {
          border: 1px solid #cccccc;
          border-collapse: collapse;
          th,
          td {
            border: 1px solid #cccccc;
            padding: 10px 20px;
          }
          th {
            font-weight: bold;
            background-color: #f6f8fa;
          }
          tr:nth-child(even) {
            background-color: #f6f8fa;
          }
        }
        blockquote {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 6px;
            background-color: #13c2c2;
          }
          background: #f8f8f8;
          margin-left: 0;
          padding: 0.2rem 1.2rem;
          padding-left: 1.6rem;
        }
      }
    }
  }
}
</style>
