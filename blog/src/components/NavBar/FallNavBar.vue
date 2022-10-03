<template>
  <transition name="fall">
    <div class="mask">
      <div class="fall-nav-bar">dsfsdafsd士大夫随风倒十分</div>
    </div>
  </transition>
</template>

<script setup>
</script>

<style lang="less" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.3);
  /* 使用固定定位让元素撑满全屏 */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .fall-nav-bar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 500px;
    margin-top: 60px;
    background-color: white;
    z-index: 99;
  }
}

.fall-enter-from,
.fall-leave-to {
  opacity: 0;
  // transform: translate(-50%, -300px);
  transform: translateY(-300px);
}

.fall-enter-to,
.fall-leave-from {
  opacity: 1;
  // transform: translate(-50%, 0px);
  transform: translate(0px);
}

.fall-enter-active,
.fall-leave-active {
  transition: all 1s ease;
}
</style>