<template>
  <top-nav-bar></top-nav-bar>
  <fall-nav-bar v-show="hidden.isShowTop" />
  <router-view />
</template>

<script setup>
import FallNavBar from '@/components/NavBar/FallNavBar.vue'
import TopNavBar from '@/components/NavBar/TopNavBar.vue'
import useHiddenStore from '@/stores/modules/hidden'

const hidden = useHiddenStore()
</script>


<style lang="less" scoped></style>
