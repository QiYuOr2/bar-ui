<template>
  <div>
    <h2>Switch 开关组件</h2>
    <bar-switch />
    <bar-switch v-model="switchVal">
      <template #prefix>1</template>
      <template #suffix>0</template>
    </bar-switch>
    <bar-switch disabled />
    <bar-switch disabled checked />
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Switch } from '../../components';
import SwitchMd from './markdown/switch.md';
export default {
  components: {
    [Switch.name]: Switch,
    md: SwitchMd,
  },
};
</script>

<style>
div .bar-switch {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
