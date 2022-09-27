<template>
  <transition name="left">
    <div class="left">
      <left-about />
      <left-announcement />
      <div class="new-aritcle">最新文章</div>
    </div>
  </transition>

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
}

.left-enter-from,
.left-leave-to {
  opacity: 0;
  // transform: translateY(-300px);
}

.left-enter-to,
.left-leave-from {
  opacity: 1;
  // transform: translateY(0px);
}

.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
}
</style>