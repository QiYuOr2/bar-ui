<template>
  <h2>Button 按钮组件</h2>
  <div>
    <bar-button>default按钮</bar-button>
    <bar-button type="primary">primary按钮</bar-button>
    <bar-button disabled>禁用按钮</bar-button>
    <bar-button loading>loading按钮</bar-button>
    <bar-button type="warn">warn按钮</bar-button>
    <bar-button type="danger">danger按钮</bar-button>
    <bar-button type="link">link按钮</bar-button>
    <bar-button type="text">text按钮</bar-button>
    <bar-button size="lg">large按钮</bar-button>
    <bar-button type="primary" size="sm">small按钮</bar-button>
    <bar-button type="primary" size="sm" shape="circle">圆</bar-button>
    <bar-button type="primary" size="sm" shape="round">圆角</bar-button>
    <bar-button type="future">future按钮</bar-button>
    <bar-button block>block按钮</bar-button>
    <bar-button block shape="round"> block round按钮 </bar-button>
    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Button } from '../../components';
import ButtonMd from './markdown/button.md';
export default {
  components: {
    [Button.name]: Button,
    md: ButtonMd,
  },
};
</script>

<style>
div .bar-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
