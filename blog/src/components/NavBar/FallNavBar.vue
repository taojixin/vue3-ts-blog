<template>
  <transition name="fall">
    <div class="fall-nav-bar">dsfsdafsd士大夫随风倒十分</div>
  </transition>
</template>

<script setup>
</script>

<style lang="less" scoped>
.fall-nav-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 60vh;
  border: 1px solid black;
}

.fall-enter-from,
.fall-leave-to {
  opacity: 0;
  transform: translate(-50%, -300px);
}

.fall-enter-to,
.fall-leave-from {
  opacity: 1;
  transform: translate(-50%, 0px);
}

.fall-enter-active,
.fall-leave-active {
  transition: all 1s ease;
}
</style>