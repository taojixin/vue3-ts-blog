<template>
  <div class="collections shadow-box">
    <div class="classification">
      <span class="sort-item"
            v-for="item in sortList"
            :key="item">{{item}}</span>
    </div>
    <div class="collection-content">
      <div class="sort"
           v-for="item in sortList"
           :key="item">
        <h1>{{item}}</h1>

      </div>
    </div>
  </div>
</template>

<script setup>
const { ref } = require('@vue/reactivity')

const sortList = ref([
  '常用官网',
  '常用文档',
  '实用工具',
  '常逛网站',
  '工具库',
  'Vue全家桶',
  '收藏的网站'
])
</script>

<style lang="less" scoped>
.collections {
  margin: 0 5%;
  box-sizing: border-box;
  // width: 100%;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  // background-color: rgb(234, 230, 230);
  // overflow: scroll;

  .classification {
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    border-radius: 10px;

    .sort-item {
      border: 1px solid gray;
      color: rgb(78, 73, 73);
      height: 25px;
      font-size: 20px;
      padding: 5px;
      border-radius: 40px;
      margin: 5px 20px;
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        background-color: rgb(209, 202, 202);
      }
    }
  }

  .collection-content {
    flex: 1;
  }
}

@media (max-width: 376px) {
  .collections {
    .classification {
      .sort-item {
        font-size: 12px;
        height: 12px;
        padding: 3px;
        margin: 3px 5px;
      }
    }
  }
}
</style>