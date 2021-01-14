import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/example',
    },
    {
      path: '/example',
      component: () => import('./views/example/example.vue'),
    },
  ],
});

export default router;
