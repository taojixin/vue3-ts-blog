<template>
  <div class="center">
    <entry />
    <entry />
    <entry />
    <entry />
  </div>
</template>

<script setup>
import Entry from './entry.vue'
</script>

<style lang="less" scoped>
.center {
  flex: 1;
  margin: 0 30px;
  // min-width: 375px;
}
</style>