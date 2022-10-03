<template>
  <div class="left-announcement shadow-box">
    <h2>公告</h2>
    <p>暂无</p>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.left-announcement {
  height: 300px;
  margin-top: 100px;
  background-color: white;
  transition: all 0.5s;

  &:hover {
    transform: translateY(5px);
  }

  h2 {
    text-align: center;
  }
  p {
    text-indent: 2em;
  }
}
</style>