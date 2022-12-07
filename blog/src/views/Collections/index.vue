<template>
  <div class="collections">
    <!-- 导航 -->
    <div class="classification">
      <span class="sort-item"
            v-for="item in sortList"
            :key="item"
            @click="clickIndex(item.sortName)"
            :style="changeStyle(item.sortName)">
        {{item.sortName}}
      </span>
    </div>
    <!-- content -->
    <div class="collection-content">
      <CollectionList :sort-list="sortList"
                      v-model="currHigh"
                      :selecteBar="selecteBar" />
    </div>
  </div>
</template>

<script setup>
import CollectionList from './cpns/CollectionList.vue';
const { ref } = require('@vue/reactivity')

const currHigh = ref('常用网页')
const selecteBar = ref('')
const clickIndex = (title) => {
  selecteBar.value = title
}
const changeStyle = (title) => {
  return title === currHigh.value
    ? { color: 'grey', backgroundColor: 'white' }
    : ''
}
const sortList = ref([
  {
    id: 1,
    sortName: '常用网页',
    item: [
      {
        itemName: 'GitHub',
        sketch: '全球最大同性交友平台，哈哈。',
        iconUrl: 'http://libertys.cn/img/sortimg/github.png',
        url: 'https://github.com'
      },
      {
        itemName: 'CSDN',
        sketch: '适合新手解决问题的平台。',
        iconUrl: 'http://libertys.cn/img/sortimg/csdn.png',
        url: 'https://www.csdn.net/'
      },
      {
        itemName: '哔哩哔哩',
        sketch: '无聊摸鱼用。',
        iconUrl: 'http://libertys.cn/img/sortimg/bilibili.png',
        url: 'https://www.bilibili.com/'
      }
    ]
  },
  {
    id: 2,
    sortName: '常用文档',
    item: [
      {
        itemName: 'MDN',
        sketch: '超级好用的前端文档(超级推荐)。',
        iconUrl: 'http://libertys.cn/img/sortimg/mdn.jpeg',
        url: 'https://developer.mozilla.org/zh-CN/'
      },
      {
        itemName: 'ECMAScript 6 入门教程',
        sketch:
          '阮一峰著，对涉及的语法知识给予详细介绍，并给出大量简洁易懂的示例代码。。',
        iconUrl: 'http://libertys.cn/img/sortimg/es6.png',
        url: 'https://es6.ruanyifeng.com/'
      },
      {
        itemName: '菜鸟教程',
        sketch: '很适合新手的文档。',
        iconUrl: 'http://libertys.cn/img/sortimg/cainiao.png',
        url: 'https://www.runoob.com/'
      },
      {
        itemName: 'Node.js官方文档',
        sketch: 'Node.js所有API，没事研究node的时候常看。',
        iconUrl: 'http://libertys.cn/img/sortimg/node.png',
        url: 'https://nodejs.org/dist/latest-v16.x/docs/api/'
      },
      {
        itemName: 'Vue3官网',
        sketch: 'Vue3官网，中文，很友好。',
        iconUrl: 'http://libertys.cn/img/sortimg/vue3.png',
        url: 'https://cn.vuejs.org/guide/introduction.html'
      }
    ]
  },
  {
    id: 3,
    sortName: '实用工具',
    item: [
      {
        itemName: 'Snipaste',
        sketch: '超级好用的截图取色工具(超级推荐)。',
        iconUrl: 'http://libertys.cn/img/sortimg/snipaste.png',
        url: 'https://www.snipaste.com/'
      },
      {
        itemName: 'uTools',
        sketch: '新一代效率工具平台自由组合插件应用，(超级推荐)。',
        iconUrl: 'http://libertys.cn/img/sortimg/utools.png',
        url: 'https://www.u.tools/'
      },
      {
        itemName: 'iTab新标签页',
        sketch: '代替浏览器首页，简洁优美无广告。',
        iconUrl: 'http://libertys.cn/img/sortimg/itab.png',
        url: 'https://itab.link/'
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
    id: 6,
    sortName: 'Vue相关',
    item: [
      {
        itemName: 'Vue3.0',
        sketch: 'Vue3.0官网，组合式API。',
        iconUrl: 'http://libertys.cn/img/sortimg/vue3.png',
        url: 'https://cn.vuejs.org/guide/introduction.html'
      },
      {
        itemName: 'VueRouter',
        sketch: ' ',
        iconUrl: 'http://libertys.cn/img/sortimg/vuerouter.jpeg',
        url: 'https://router.vuejs.org/zh/installation.html'
      },
      {
        itemName: 'VueX',
        sketch: 'Vue状态管理工具(v4.x)。',
        iconUrl: 'http://libertys.cn/img/sortimg/vuex.png',
        url: 'https://vuex.vuejs.org/zh/'
      },
      {
        itemName: 'Pinia',
        sketch: 'Vue官方推荐的状态管理工具，更加支持ts。',
        iconUrl: 'http://libertys.cn/img/sortimg/pinia.png',
        url: 'https://pinia.vuejs.org'
      }
    ]
  },
  {
    id: 7,
    sortName: '收藏的网站',
    item: [
      {
        itemName: 'snippet generator',
        sketch: 'vscode代码片段生成。',
        iconUrl: 'http://libertys.cn/img/blog/chichichi.gif',
        url: 'https://snippet-generator.app/'
      },
      {
        itemName: '印记中文',
        sketch: '很多前端的中文文档。',
        iconUrl: 'http://libertys.cn/img/sortimg/yinji.png',
        url: 'https://docschina.org/'
      },
      {
        itemName: '在线工具箱',
        sketch: '很多实用工具。',
        iconUrl: 'http://libertys.cn/img/blog/lyj.gif',
        url: 'https://tool.lu/'
      },
      {
        itemName: 'ico图标制作',
        sketch: '在线制作ico图标。',
        iconUrl: 'http://libertys.cn/img/blog/ddd.gif',
        url: 'https://www.bitbug.net/'
      }
    ]
  }
])
</script>

<style lang="less" scoped>
.collections {
  margin: 0 5%;
  box-sizing: border-box;
  padding-top: 160px;
  display: flex;
  flex-direction: column;

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
    background-color: rgb(227, 219, 219);
    border-radius: 10px;
    z-index: 999;

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