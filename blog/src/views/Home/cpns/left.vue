<template>
  <div class="left">
    <left-about />
    <left-announcement />
    <div class="new-aritcle">最新文章</div>
  </div>
</template>

<script setup>
import LeftAbout from './left-about.vue'
import LeftAnnouncement from './left-announcement.vue'
</script>

<style lang="less" scoped>
.left {
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid blue;
}
</style>