<template>
  <div class="left-about shadow-box">
    <img src="@/assets/Headportrait.jpg"
         alt="" />
    <span class="my-title">Libertys</span>
    <p class="motto">
      如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。
    </p>

    <div class="contact">
      <i class="iconfont icon-github-fill"></i>
      <i class="iconfont icon-QQ-circle-fill"></i>
      <i class="iconfont icon-weixin1"></i>
      <i class="iconfont icon-csdn"></i>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.left-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  background-color: white;

  img {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    border-radius: 100px;
  }

  .my-title {
    margin: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }

  .motto {
    text-indent: 2em;
    padding: 0 20px;
  }

  .contact {
    i {
      font-size: 40px;
      margin: 0 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>