import { createRouter, createWebHashHistory } from 'vue-router';
import example from './views/example/example.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/example',
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/example',
      component: example,
    },
  ],
});

export default router;
