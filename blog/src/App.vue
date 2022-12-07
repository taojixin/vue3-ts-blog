<template>
  <div class="container-top">
    <TopNavBar></TopNavBar>
  </div>
  <FallNavBar v-show="hidden.isShowTop" />
  <div class="container">
    <router-view />
  </div>
  <BackToTop />
</template>

<script setup>
import FallNavBar from '@/components/NavBar/FallNavBar.vue'
import TopNavBar from '@/components/NavBar/TopNavBar.vue'
import useHiddenStore from '@/stores/modules/hidden'
import BackToTop from './components/BackToTop/index.vue'

const hidden = useHiddenStore()
</script>

<style lang="less" scoped>
.container-top {
  height: 60px;
}
.container {
  // margin-top: 60px;
}
</style>
