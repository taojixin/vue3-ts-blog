<template>
  <div class="index-bar-sidebar">
    <ul>
      <li v-for="item in dataList"
          :key="item.id"
          :style="changeStyle(item.title)"
          @click="clickIndex(item.title)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps({
  dataList: {
    type: Array,
    default: () => []
  },
  currHigh: {
    type: String,
    default: () => ''
  }
})
const emit = defineEmits(['selectedIndexBar'])
const clickIndex = (title) => {
  emit('selectedIndexBar', title)
}

const changeStyle = (title) => {
  console.log(title, props.currHigh)
  return title === props.currHigh ? { color: 'blue' } : ''
}
</script>

<style lang="less" scoped>
.index-bar-sidebar {
  position: fixed;
  top: 200px;
  right: 100px;
  margin-top: 100px;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    cursor: pointer;
    margin: 10px;
  }
}
</style>