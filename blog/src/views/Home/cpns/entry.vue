<template>
  <div class="entry shadow-box">
    <div class="entry-left">
      <h2>{{entryData.title}}</h2>
      <div class="entry-info">
        <span class="tag">
          <i class="iconfont icon-shijian"></i>
          {{entryData.date}}
        </span>
        <span class="divide">|</span>
        <span class="divide">
          <i class="iconfont icon-yanjing-zhengyan"></i>
          {{entryData.views}}
        </span>
      </div>
      <div class="intro">{{entryData.intro}}</div>
      <div class="sort">
        <span v-for="item in entryData.sort"
              :key="item"
              class="sort-tag">{{item}}</span>
      </div>
    </div>
    <div class="entry-right">
      <div class="img"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  entryData: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.entry {
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 5px;
  height: 250px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    .img {
      transform: scale(1.2);
    }
  }

  .entry-left {
    flex: 1;

    h2 {
      margin: 5px 5px;
    }
    .entry-info {
      color: gray;
      margin-bottom: 10px;

      .divide {
        margin: 0 5px;
      }
    }

    .intro {
      text-indent: 2em;
      padding: 10px 40px 0 30px;
      font-size: 20px;
      height: 150px;
    }

    .sort {
      padding: 0px 0px;
      .sort-tag {
        padding: 0 10px;
        font-size: 25px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;
      }
    }
  }
  .entry-right {
    flex: 1;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      background-image: url(http://libertys.cn/img/yuansheng/qin.png);
      background-position: center center;
      background-size: 100% 100%;
      transition: all 0.8s;
    }
  }
}
@media (min-width: 750px) {
}

@media (max-width: 749px) {
  .entry {
    flex-direction: column;
    height: 350px;

    .entry-left {
      .intro {
        padding: 5px;
        font-size: 16px;
        height: 80px;
      }

      .sort {
        padding: 5px 0px;
        .sort-tag {
          padding: 0 10px;
          font-size: 20px;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
            sans-serif;
        }
      }
    }
  }
}
</style>