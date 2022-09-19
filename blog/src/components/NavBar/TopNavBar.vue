<template>
  <transition name="top">
    <div class="top-nav-bar" v-if="isShowTopBar">
      <div class="title" @click="toPage('home')">
        <span class="text">Libertys</span>
      </div>
      <div class="menus" v-if="navBar.isShow">
        <span class="item" @click="toPage('home')">
          <i class="iconfont icon-shouyefill size"></i>
          首页
        </span>
        <span class="item" @click="toPage('articles')">
          <i class="iconfont icon-16 size"></i>
          文章
        </span>
        <span class="item" @click="toPage('collections')">
          <i class="iconfont icon-shoucangjia size"></i>
          收藏
        </span>
        <span class="item" @click="toPage('life')">
          <i class="iconfont icon-icon size"></i>
          生活
        </span>
        <span class="item" @click="toPage('message')">
          <i class="iconfont icon-liuyanfill size"></i>
          留言
        </span>
        <span class="item" @click="toPage('about')">
          <i class="iconfont icon-guanyu size"></i>
          关于
        </span>
      </div>
      <div
        class="select iconfont icon-shezhi1"
        v-if="!navBar.isShow"
        @click="navBar.isShowTop = !navBar.isShowTop"
      ></div>
    </div>
  </transition>
</template>

<script setup>
import useNavbarStore from '@/stores/modules/navbar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 动画
let isShowTopBar = ref(false)
setTimeout(() => {
  isShowTopBar.value = true
}, 10)

// 响应式
const navBar = useNavbarStore()
// 判读窗口大小控制menus的显示与隐藏
if (document.documentElement.clientWidth > 700) {
  navBar.isShow = true
}
window.addEventListener('resize', () => {
  let clientWidth = document.documentElement.clientWidth
  if (clientWidth < 700) {
    navBar.monitorScreenChange()
  } else {
    navBar.isShow = true
  }
})

// 页面跳转
const toPage = (path) => {
  router.push('/' + path)
}
</script>

<style lang="less" scoped>
.top-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  background-color: aliceblue;

  .title {
    font-size: 30px;
    // border: 1px solid pink;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  .menus {
    .item {
      font-size: 20px;
      margin: 0 0 0 20px;
      cursor: pointer;
      transition: all 0.5s;
      border-radius: 3px;
      &:hover {
        color: red;
        background-color: rgb(158, 184, 207);
      }

      .size {
        font-size: 20px;
      }
    }
  }

  .select {
    font-size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
}

.top-enter-from {
  opacity: 0;
  // transform: translateY(-300px);
}

.top-enter-to {
  opacity: 1;
  // transform: translateY(0px);
}

.top-enter-active,
.top-leave-active {
  transition: all 4s ease;
}
</style>