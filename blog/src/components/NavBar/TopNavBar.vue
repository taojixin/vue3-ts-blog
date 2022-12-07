<template>
  <transition name="top">
    <div class="top-nav-bar" ref="topNav" v-if="isShowTopBar">
      <div class="title" @click="toPage('home')">
        <span class="text">Libertys</span>
      </div>
      <!-- 导航列表 -->
      <div class="menus" v-if="hidden.isShow">
        <template v-for="item in navList" :key="item.id">
          <span class="item" @click="toPage(item.path)">
            <i :class="item.iconClass"></i>
            {{ item.text }}
          </span>
        </template>
      </div>
      <!-- 窄屏幕 -->
      <div
        class="select iconfont icon-caidan"
        v-if="!hidden.isShow"
        @click="changeFallNavBar"
      ></div>
    </div>
  </transition>
</template>

<script setup>
import useHiddenStore from '@/stores/modules/hidden'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 导航列表
const navList = [
  {
    id: 0,
    path: 'home',
    text: '首页',
    iconClass: 'iconfont icon-shouyefill size'
  },
  {
    id: 1,
    path: 'articles',
    text: '文章',
    iconClass: 'iconfont icon-16 size'
  },
  {
    id: 2,
    path: 'collections',
    text: '收藏',
    iconClass: 'iconfont icon-shoucangjia size'
  },
  {
    id: 3,
    path: 'life',
    text: '生活',
    iconClass: 'iconfont icon-icon size'
  },
  {
    id: 4,
    path: 'message',
    text: '留言',
    iconClass: 'iconfont icon-liuyanfill size'
  },
  {
    id: 5,
    path: 'about',
    text: '关于',
    iconClass: 'iconfont icon-guanyu size'
  }
]
const router = useRouter()

// 响应式
const hidden = useHiddenStore()

// 动画
let isShowTopBar = ref(false)
setTimeout(() => {
  isShowTopBar.value = true
}, 10)

// 页面跳转
const toPage = (path) => {
  router.push('/' + path)
}

// 控制导航栏的背景颜色
let topNav = ref()
window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop
  if (scrollTop > 50) {
    topNav.value.style.color = 'white'
  } else {
    topNav.value.style.color = 'black'
  }
})

const changeFallNavBar = () => {
  hidden.isShowTop = !hidden.isShowTop
}
</script>

<style lang="less" scoped>
.top-nav-bar {
  /* 模糊大小就是靠的blur这个函数中的数值大小 */
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  z-index: 999;

  .title {
    font-size: 30px;
    // border: 1px solid pink;
    // position: relative;
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
    transition: color 0.3s;
    &:hover {
      cursor: pointer;
      color: rgb(90, 85, 85);
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
