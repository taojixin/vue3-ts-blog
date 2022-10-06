<template>
  <TopNavBar></TopNavBar>
  <FallNavBar v-show="hidden.isShowTop" />
  <router-view />
  <BackToTop />
</template>

<script setup>
import FallNavBar from '@/components/NavBar/FallNavBar.vue'
import TopNavBar from '@/components/NavBar/TopNavBar.vue'
import useHiddenStore from '@/stores/modules/hidden'
import BackToTop from './components/BackToTop/index.vue'

const hidden = useHiddenStore()
</script>


<style lang="less" scoped></style>
