<template>
  <transition name="hello">
    <div class="hello-visitor"
         v-if="isShow">
      <div class="container">
        <div class="top">
          <img src="@/assets/Headportrait.jpg"
               class="portroit"
               alt="" />
          <span class="date">{{nowTime}}</span>
          <span class="close"
                @click="isShow = false">
            <i class="iconfont icon-chahao"></i>
          </span>
        </div>
        <div class="bottom">
          <span>你好啊，来访者！</span>
          <i class="iconfont icon-icon-test"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { ref } = require('@vue/reactivity')

const isShow = ref(false)
setTimeout(() => {
  isShow.value = true
}, 1000)
setTimeout(() => {
  isShow.value = false
}, 6000)

const time = Date.now()
function timestampToTime(timestamp) {
  var date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '年'
  var M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '月'
  var D = date.getDate() + '日 '
  var h = date.getHours() + ':'
  var m = date.getMinutes()
  return Y + M + D + h + m
}
const nowTime = timestampToTime(time)
</script>

<style lang="less" scoped>
.hello-visitor {
  position: fixed;
  top: 100px;
  right: 10px;
  width: 350px;
  background-color: white;
  border-radius: 10px;
  z-index: 999;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    border-radius: 10px;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid grey;
      flex: 1;
      img {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        margin: 5px 10px;
      }
      .date {
        float: right;
      }
      .close {
        margin-right: 10px;
        &:hover {
          cursor: pointer;
          color: #e3eeff;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      flex: 1;
      margin: 0 10px;
      i {
        font-size: 30px;
        color: rgb(79, 146, 124);
        // font-weight: bold;
      }
    }
  }
}

.hello-enter-from,
.hello-leave-to {
  transform: translateX(300px);
  opacity: 0;
}

.hello-enter-to,
.hello-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.hello-enter-active,
.hello-leave-active {
  transition: all 2s ease;
}
</style>