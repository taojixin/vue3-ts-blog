<template>
  <transition name="home">
    <div class="home page-common">
      <hello-visitor></hello-visitor>
      <div class="top">
        <left v-show="hidden.isHomeLeft" />
        <center />
      </div>
      <bottom />
    </div>
  </transition>
</template>

<script setup>
import HelloVisitor from '@/components/HelloVisitor'
import useHiddenStore from '@/stores/modules/hidden'
import Bottom from './cpns/bottom.vue'
import Center from './cpns/center.vue'
import Left from './cpns/left.vue'

const hidden = useHiddenStore()
</script>

<style lang="less" scoped>
.home {
  padding-top: 40px;
  .top {
    display: flex;
    // justify-content: space-between;
  }
}

.home-enter-from,
.home-leave-to {
  opacity: 0;
  transform: translate(-50%, -300px);
}

.home-enter-to,
.home-leave-from {
  opacity: 1;
  transform: translate(-50%, 0px);
}

.home-enter-active,
.home-leave-active {
  transition: all 1s ease;
}
</style>