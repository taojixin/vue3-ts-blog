<template>
  <transition name="hello">
    <div class="hello-visitor" v-if="isShow">
      <div class="container">
        <div class="top">
          <img src="@/assets/Headportrait.jpg" class="portroit" alt="" />
          <span class="date">2022年9月17日21：48</span>
          <span>X</span>
        </div>
        <div class="bottom">
          <span>你好啊，来访者！</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { ref } = require('@vue/reactivity')

const isShow = ref(true)
setTimeout(() => {
  isShow.value = false
}, 3000)
</script>

<style lang="less" scoped>
.hello-enter-from,
.hello-leave-to {
  opacity: 0;
}

.hello-enter-to,
.hello-leave-from {
  opacity: 1;
}

.hello-enter-active,
.hello-leave-active {
  transition: opacity 2s ease;
}
.hello-visitor {
  position: fixed;
  top: 100px;
  right: 10px;
  width: 25%;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    // background-color: red;
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
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
    }
  }
}
</style>