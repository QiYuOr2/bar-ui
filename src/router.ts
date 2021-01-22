import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/home.vue'),
      children: [
        {
          path: '/',
          component: () => import('./views/detail/quickstart.vue'),
        },
        {
          path: 'avatar',
          component: () => import('./views/detail/avatar.vue'),
        },
        {
          path: 'button',
          component: () => import('./views/detail/button.vue'),
        },
        {
          path: 'icon',
          component: () => import('./views/detail/icon.vue'),
        },
        {
          path: 'item',
          component: () => import('./views/detail/item.vue'),
        },
        {
          path: 'divider',
          component: () => import('./views/detail/divider.vue'),
        },
        {
          path: 'message',
          component: () => import('./views/detail/message.vue'),
        },
        {
          path: 'input',
          component: () => import('./views/detail/input.vue'),
        },
        {
          path: 'radio',
          component: () => import('./views/detail/radio.vue'),
        },
        {
          path: 'select',
          component: () => import('./views/detail/select.vue'),
        },

        {
          path: 'checkbox',
          component: () => import('./views/detail/checkbox.vue'),
        },
        {
          path: 'switch',
          component: () => import('./views/detail/switch.vue'),
        },
        {
          path: 'textarea',
          component: () => import('./views/detail/textarea.vue'),
        },
        {
          path: 'alert',
          component: () => import('./views/detail/alert.vue'),
        },
        {
          path: 'card',
          component: () => import('./views/detail/card.vue'),
        },
        {
          path: 'collapse',
          component: () => import('./views/detail/collapse.vue'),
        },
        {
          path: 'dialog',
          component: () => import('./views/detail/dialog.vue'),
        },
        {
          path: 'dropdown',
          component: () => import('./views/detail/dropdown.vue'),
        },
        {
          path: 'header',
          component: () => import('./views/detail/header.vue'),
        },
        {
          path: 'infinite',
          component: () => import('./views/detail/infinite-scroll.vue'),
        },
        {
          path: 'loading',
          component: () => import('./views/detail/loading.vue'),
        },
        {
          path: 'modal',
          component: () => import('./views/detail/modal.vue'),
        },
        {
          path: 'section',
          component: () => import('./views/detail/section.vue'),
        },
        {
          path: 'sidebar',
          component: () => import('./views/detail/sidebar.vue'),
        },
        {
          path: 'tabbar',
          component: () => import('./views/detail/tabbar.vue'),
        },
        {
          path: 'tabs',
          component: () => import('./views/detail/tabs.vue'),
        },
      ],
    },
    {
      path: '/example',
      component: () => import('./views/example.vue'),
    },
  ],
});

export default router;
