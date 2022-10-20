<template>
  <div class="index-bar-content">
    <template v-for="item in dataList"
              :key="item.id">
      <div class="item">
        <div class="title"
             ref="keyBar">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
const keyBar = ref()
const currHight = ref('A')
let midArr = []
onMounted(() => {
  keyBar.value.forEach((item) => {
    midArr.push({
      key: item.innerText,
      top: item.offsetTop
    })
  })
})
console.log(midArr)

window.addEventListener('scroll', () => {
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop
  let result = midArr.findIndex((item) => item.top > scrollY)
  currHight.value = midArr[result - 1]?.key
})
</script>

<style lang="less" scoped>
.index-bar-content {
  float: left;
  margin-top: 100px;

  .item {
    height: 100px;
    background-color: blue;
    border: 1px solid black;
  }
}
</style>