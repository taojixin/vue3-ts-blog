<template>
  <div class="entry shadow-box">
    <template v-if="hidden.isHomeLeft === true && entryData.id % 2 === 0 ? true : false">
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
        <div class="img"
             :style="getBackgroundImage(entryData.imgSrc)">
        </div>
      </div>
    </template>
    <template v-else>
      <div class="entry-right">
        <div class="img"
             :style="getBackgroundImage(entryData.imgSrc)">
        </div>
      </div>
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
    </template>
  </div>
</template>

<script setup>
import useHiddenStore from '@/stores/modules/hidden'
import { defineProps } from 'vue'
const hidden = useHiddenStore()
defineProps({
  entryData: {
    type: Object,
    default: () => {}
  }
})

const getBackgroundImage = (src) => {
  return {
    backgroundImage: `url(${src})`
  }
}
</script>

<style lang="less" scoped>
.entry {
  display: flex;
  flex-direction: row;
  background-color: white;
  // padding: 5px;
  height: 250px;
  margin-bottom: 20px;
  // cursor: pointer;
  &:hover {
    .img {
      transform: scale(1.2);
    }
  }

  .entry-left {
    flex: 2;
    padding: 45px 10px;
    box-sizing: border-box;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
      transform: translateY(3px);
    }

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
      font-family: monospace;
      text-indent: 2em;
      padding: 10px 40px 10px 30px;
      font-size: 16px;
      height: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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
    flex: 3;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      transition: all 0.8s;
      background-position: center center;
      background-size: 620px 250px;
      background-repeat: no-repeat;
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
      padding: 0;
      .intro {
        padding: 5px;
        font-size: 16px;
        height: 50px;
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