<template>
  <div class="container">
    <nav>
      <router-link to="/example">example</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="less">
html,
body,
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
