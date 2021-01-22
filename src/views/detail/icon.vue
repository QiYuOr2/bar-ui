<template>
  <div>
    <h2>Icon 组件</h2>
    <div class="icon-container">
      <div><bar-icon name="loading" size="lg" /> <span>loading</span></div>
      <div><bar-icon name="loading" /> <span>loading</span></div>
      <div><bar-icon name="loading" size="sm" /> <span>loading</span></div>
      <div><bar-icon name="left" size="sm" /> <span>left</span></div>
      <div><bar-icon name="down" size="sm" /> <span>down</span></div>
      <div><bar-icon name="up" size="sm" /> <span>up</span></div>
      <div><bar-icon name="right" size="sm" /> <span>right</span></div>
      <div><bar-icon name="heart" size="sm" /> <span>hear</span></div>
      <div><bar-icon name="success" size="sm" /> <span>success</span></div>
      <div><bar-icon name="info" size="sm" /> <span>info</span></div>
      <div><bar-icon name="warn" size="sm" /> <span>warn</span></div>
      <div><bar-icon name="error" size="sm" /> <span>error</span></div>
      <div><bar-icon name="close" size="sm" /> <span>close</span></div>
      <div><bar-icon name="home" size="sm" /> <span>home</span></div>
      <div><bar-icon name="user" size="sm" /> <span>user</span></div>
      <div><bar-icon name="bars" size="sm" /> <span>bars</span></div>
      <div><bar-icon name="menu" size="sm" /> <span>menu</span></div>
      <div><bar-icon name="setting" size="sm" /> <span>setting</span></div>
    </div>
    <pre v-highlightjs><md /></pre>
  </div>
</template>

<script>
import { Section, Icon } from '../../components';
import IconMd from './markdown/icon.md';
export default {
  components: {
    [Section.name]: Section,
    [Icon.name]: Icon,
    md: IconMd,
  },
};
</script>

<style>
.icon-container {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.icon-container div {
  vertical-align: bottom;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon-container div .bar-icon {
  margin-bottom: 10px;
}
</style>
