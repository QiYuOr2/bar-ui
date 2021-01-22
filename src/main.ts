import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/solarized-light.css';

createApp(App).use(router).use(VueHighlightJS).mount('#app');
