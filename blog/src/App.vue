<template>
  <top-nav-bar></top-nav-bar>
  <fall-nav-bar v-show="navBar.isShowTop && !navBar.isShow" />
  <router-view />
</template>

<script setup>
import TopNavBar from '@/components/NavBar/TopNavBar.vue'
import FallNavBar from '@/components/NavBar/FallNavBar.vue'
import useNavbarStore from '@/stores/modules/navbar'
// import { ref } from '@vue/reactivity'

// let isShowTopBar = ref(false)

// setTimeout(() => {
//   isShowTopBar.value = true
// }, 1000)

const navBar = useNavbarStore()
</script>


<style lang="less" scoped></style>
