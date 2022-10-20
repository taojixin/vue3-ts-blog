<template>
  <div class="index-bar-sidebar">
    <ul>
      <li v-for="item in dataList"
          :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  dataList: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.index-bar-sidebar {
  float: right;
  margin-top: 100px;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    cursor: pointer;
  }
}
</style>