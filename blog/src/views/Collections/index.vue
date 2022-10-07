<template>
  <div class="collections shadow-box">
    <div class="classification">
      <span class="sort-item"
            v-for="item in sortList"
            :key="item">{{item.sortName}}</span>
    </div>
    <div class="collection-content">
      <CollectionList :sort-list="sortList" />
    </div>
  </div>
</template>

<script setup>
import CollectionList from './cpns/CollectionList.vue'
const { ref } = require('@vue/reactivity')

const sortList = ref([
  {
    id: 1,
    sortName: '常用网页',
    item: [
      {
        itemName: 'GitHub',
        sketch: '全球最大同性交友平台，哈哈。',
        iconUrl: 'http://libertys.cn/img/sortimg/github.png',
        src: 'https://github.com'
      },
      {
        itemName: 'CSDN',
        sketch: '适合新手解决问题的平台。',
        iconUrl: 'http://libertys.cn/img/sortimg/csdn.png',
        src: 'https://www.csdn.net/'
      },
      {
        itemName: '哔哩哔哩',
        sketch: '无聊摸鱼用。',
        iconUrl: 'http://libertys.cn/img/sortimg/bilibili.png',
        src: 'https://www.bilibili.com/'
      }
    ]
  },
  {
    id: 2,
    sortName: '常用文档',
    item: [
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      }
    ]
  },
  {
    id: 3,
    sortName: '实用工具',
    item: [
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      }
    ]
  },
  {
    id: 4,
    sortName: '常逛网站',
    item: [
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      }
    ]
  },
  {
    id: 5,
    sortName: '工具库',
    item: [
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      }
    ]
  },
  {
    id: 6,
    sortName: 'Vue全家桶',
    item: [
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      }
    ]
  },
  {
    id: 7,
    sortName: '收藏的网站',
    item: [
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      },
      {
        itemName: 'Vue',
        sketch: 'Vue官网，可查询相关API。',
        iconUrl: 'http://libertys.cn/img/yuansheng/yinyue.png'
      }
    ]
  }
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