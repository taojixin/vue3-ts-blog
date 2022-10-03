<template>
  <div class="back-to-top"
       @click="backToTop"
       v-show="isHidden">
    <i class="iconfont icon-dingbu top"></i>
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
  isHidden.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="less" scoped>
.back-to-top {
  position: fixed;
  right: 20px;
  bottom: 10px;
  border-radius: 30px;
  z-index: 999;
  &:hover {
    cursor: pointer;
    .top {
      font-size: 55px;
      color: gray;
    }
  }

  .top {
    font-size: 50px;
    font-weight: bold;
  }
}
</style>