<template>
  <div class="loading-container">
    <h2>Loading 加载组件</h2>
    <bar-switch v-model="isLoad" />
    <bar-loading v-model="isLoad" loading-text="自定义加载文字">
      <div>
        感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI
        感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI
        感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI
        感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI
      </div>
    </bar-loading>
    <bar-loading loading-text="自定义加载图标和颜色" color="red">
      <template #icon>
        <bar-icon name="success" color="red" />
      </template>
      <div>
        感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI
      </div>
    </bar-loading>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Icon, Switch, Loading } from '../../components';
import LoadingMd from './markdown/loading.md';
export default {
  components: {
    [Loading.name]: Loading,
    [Switch.name]: Switch,
    [Icon.name]: Icon,
    md: LoadingMd,
  },
  setup() {
    const isLoad = ref(false);
    return { isLoad };
  },
};
</script>

<style>
.loading-container .bar-loading {
  margin-bottom: 1rem;
}
</style>
