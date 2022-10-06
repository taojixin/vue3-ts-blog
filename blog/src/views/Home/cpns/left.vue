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

.left-enter-from,
.left-leave-to {
  opacity: 0;
}

.left-enter-to,
.left-leave-from {
  opacity: 1;
}

.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
}
</style>