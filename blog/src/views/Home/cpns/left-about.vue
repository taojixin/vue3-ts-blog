<template>
  <div class="left-about shadow-box">
    <img class="my-img"
         src="@/assets/Headportrait.jpg" />
    <span class="my-title">Libertys</span>
    <p class="motto">
      如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。
    </p>

    <div class="contact">
      <a href="https://github.com/taojixin"
         target="blank"><i class="iconfont icon-github-fill"></i></a>
      <span class="qq-box">
        <i class="iconfont icon-QQ-circle-fill"></i>
        <img src="@/assets/img/contact/qq.png"
             class="qq-img">
      </span>
      <i class="iconfont icon-weixin2"></i>
      <i class="iconfont icon-csdn1"></i>
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

  .my-img {
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
        color: gray;
      }
    }
    .qq-box {
      position: relative;

      &:hover {
        .qq-img {
          display: block;
        }
      }

      .qq-img {
        position: absolute;
        width: 100px;
        height: 100px;
        top: -120px;
        left: -20px;
        display: none;
      }
    }
  }
}
</style>