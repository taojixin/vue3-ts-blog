<template>
  <div class="bottom">
    <div class="bottomm"><a href="https://beian.miit.gov.cn"
         target="_blank">蜀ICP备2022007017号-1</a></div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.bottom {
  width: 100wh;
  height: 200px;
  position: relative;

  .bottomm {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    a {
      color: #5796e3;
      font-size: 10px;
    }
  }
}
</style>