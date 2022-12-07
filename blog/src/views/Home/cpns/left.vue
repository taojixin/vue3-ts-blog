<template>
  <transition name="leftbox">
    <div class="left">
      <left-about />
      <left-announcement />
      <div class="new-aritcle">最新文章</div>
    </div>
  </transition>
</template>

<script setup>
import LeftAbout from './LeftAbout.vue'
import LeftAnnouncement from './LeftAnnouncement.vue'
</script>

<style lang="less" scoped>
.left {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 30px;
}

.leftbox-enter-from,
.leftbox-leave-to {
  opacity: 0;
  transform: translate(-500px, 0);
}

.leftbox-enter-to,
.leftbox-leave-from {
  opacity: 1;
  transform: translate(0, 0);
}

.leftbox-enter-active,
.leftbox-leave-active {
  transition: all 0.3s ease;
}
</style>
