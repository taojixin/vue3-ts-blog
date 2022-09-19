<template>
  <div class="home page-common">
    <hello-visitor></hello-visitor>
    <div class="top">
      <left />
      <center />
      <right />
    </div>
    <bottom />
  </div>
</template>

<script setup>
import HelloVisitor from '@/components/HelloVisitor'
import Left from './cpns/left.vue'
import Center from './cpns/center.vue'
import Right from './cpns/right.vue'
import Bottom from './cpns/bottom.vue'
</script>

<style lang="less" scoped>
.home {
  .top {
    display: flex;
    justify-content: space-between;
  }
}
</style>