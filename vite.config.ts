import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';

export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx(), Markdown()],
  build: {
    base: '/bar-ui/',
  },
});
