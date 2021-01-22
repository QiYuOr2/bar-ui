import { createRouter, createWebHashHistory } from 'vue-router';
import example from './views/example.vue';
import home from './views/home.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/example',
      component: example,
    },
  ],
});

export default router;
