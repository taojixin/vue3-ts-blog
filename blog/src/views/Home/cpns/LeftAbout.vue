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
        <span class="qq-img">
          <img src="@/assets/img/contact/qq.png" />
        </span>
      </span>
      <span class="wx-box">
        <i class="iconfont icon-weixin2"></i>
        <span class="wx-img">
          <img src="@/assets/img/contact/wx.png">
        </span>
      </span>
      <a href="https://blog.csdn.net/qq_60602244?type=blog"
         target="blank"><i class="iconfont icon-csdn1"></i></a>
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
  transition: all 0.5s;

  &:hover {
    transform: translateY(5px);
  }

  .my-img {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    border-radius: 100px;
  }

  .my-title {
    margin: 5px 0;
    font-size: 25px;
    font-weight: bold;
    color: rgb(98, 91, 91);
  }

  .motto {
    text-indent: 2em;
    padding: 0 20px;
    font-weight: bold;
    color: rgb(87, 63, 63);
    text-shadow: 1px 1px 2px gray;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
      transform: translateY(2px);
    }
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
    .qq-box,
    .wx-box {
      position: relative;

      &:hover {
        .qq-img {
          display: block;
        }
      }

      .qq-img,
      .wx-img {
        position: absolute;
        width: 100px;
        height: 100px;
        top: -125px;
        left: -20px;
        z-index: 1;
        display: none;
        img {
          width: 100%;
          height: 100%;
        }

        &::after {
          content: '';
          position: absolute;
          left: 41px;
          top: 98px;
          width: 0;
          height: 0;
          border-top: 10px solid gray;
          border-left: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid transparent;
        }
      }
    }
    .wx-box {
      &:hover {
        .wx-img {
          display: block;
        }
      }
      .wx-img {
        top: -127px;
        left: -20px;
      }
    }
  }
}
</style>