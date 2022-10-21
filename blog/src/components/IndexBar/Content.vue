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
import { defineEmits, defineProps, onMounted, ref, watch } from 'vue'
const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  },
  selecteBar: {
    type: String,
    defalut: () => 'A'
  }
})
const emit = defineEmits(['update:modelValue'])
// 所有的titleDOM
const keyBar = ref()
// 当前内容高度对应的title
const currHight = ref('A')
let midArr = []
onMounted(() => {
  keyBar.value.forEach((item) => {
    midArr.push({
      key: item.innerText,
      top: item.offsetTop + 60
    })
  })
  emit('update:modelValue', currHight.value)
})
window.addEventListener('scroll', () => {
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop
  let result = midArr.findIndex((item) => item.top > scrollY)
  currHight.value = midArr[result]?.key
  emit('update:modelValue', currHight.value)
})

watch(
  () => props.selecteBar,
  (newVal) => {
    let targetTop = midArr.find((item) => item.key === newVal)?.top
    window.scrollTo({
      top: targetTop
    })
  }
)
</script>

<style lang="less" scoped>
.index-bar-content {
  float: left;
  margin-top: 100px;

  .item {
    height: 500px;
    background-color: blue;
    border: 1px solid black;
  }
}
</style>