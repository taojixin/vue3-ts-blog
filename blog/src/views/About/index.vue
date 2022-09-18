<template>
  <div class="about">
    <bottom-wave class="wave"></bottom-wave>
    <hello-visitor></hello-visitor>
    <div class="enter" @click="enterHome"><h1>进入</h1></div>
  </div>
</template>

<script setup>
import BottomWave from '@/components/beautify/BottomWave.vue'
import HelloVisitor from '@/components/HelloVisitor'
import { useRouter } from 'vue-router'

const router = useRouter()
const enterHome = () => {
  router.push('/home')
}
</script>
<style lang="less" scoped>
.about {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;

  .wave {
    width: 100%;
  }

  .enter {
    cursor: pointer;
  }
}
</style>