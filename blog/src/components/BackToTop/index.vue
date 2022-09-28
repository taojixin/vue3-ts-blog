<template>
  <div class="back-to-top"
       @click="backToTop"
       v-show="isHidden">
    >
  </div>
</template>

<script setup>
const { ref } = require('vue')

let isHidden = ref(false)

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop
  if (scrollTop > 50) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }
})
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  isHidden.value = false
}
</script>

<style lang="less" scoped>
.back-to-top {
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background-color: blue;
  &:hover {
    cursor: pointer;
  }
}
</style>