<template>
  <div>
    <h2>Avatar 头像组件</h2>
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg"
      alt="123"
      :size="64"
    />
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg"
      alt="123"
    />
    <bar-avatar>文字</bar-avatar>
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg"
      alt="123"
      :size="32"
    />
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg"
      alt="123"
      shape="square"
      :size="64"
    />
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg"
      alt="123"
      shape="square"
    />
    <bar-avatar shape="square">文字</bar-avatar>
    <bar-avatar
      src="https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg"
      alt="123"
      :size="32"
      shape="square"
    />

    <pre v-highlightjs>
      <md />
    </pre>
  </div>
</template>

<script>
import { Avatar } from '../../components';
import AvatarMd from './markdown/avatar.md';

export default {
  components: {
    [Avatar.name]: Avatar,
    md: AvatarMd,
  },
};
</script>

<style>
div .bar-avatar {
  margin-right: 1rem;
}
</style>
