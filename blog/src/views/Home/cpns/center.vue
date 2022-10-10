<template>
  <div class="center">
    <template v-for="item in datas"
              :key="item.id">
      <entry :entry-data="item" />
    </template>
  </div>
</template>

<script setup>
// import { getEntriesLists } from '@/service/index'
import Entry from '@/views/Home/cpns/Entry.vue'
// import { ref } from 'vue'

// let datas = ref([])
// getEntriesLists().then((res) => {
//   datas.value = res
// })
let datas = [
  {
    id: 1,
    title: '标题',
    date: '2022.9.29',
    views: 254,
    intro:
      '1.技术介绍前端：vue + vuex + vue-router + axios + vuetify + element + echarts 后端：SpringBoot + nginx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis +',
    sort: ['#vue', '#javascript'],
    imgSrc: 'http://libertys.cn/img/yuansheng/qin.png'
  },
  {
    id: 2,
    title: '标题',
    date: '2022.9.29',
    views: 254,
    intro:
      '1.技术介绍前端：vue + vuex + vue-router + axios +nx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis +',
    sort: ['#vue', '#javascript'],
    imgSrc: 'http://libertys.cn/img/yuansheng/erzhounian.png'
  },
  {
    id: 3,
    title: '标题',
    date: '2022.9.29',
    views: 254,
    intro:
      '1.技术介绍前端：vue + vuex + vue-router + axios + vuetify + element + echarts 后端：SpringBoot + nginx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis +',
    sort: ['#vue', '#javascript'],
    imgSrc: 'http://libertys.cn/img/yuansheng/heji.png'
  },
  {
    id: 4,
    title: '标题',
    date: '2022.9.29',
    views: 254,
    intro: '1.技术介绍前端：vue + vuex + vue-router + axios + vuetify + els +',
    sort: ['#vue', '#javascript'],
    imgSrc: 'http://libertys.cn/img/yuansheng/heji.jpg'
  },
  {
    id: 5,
    title: '标题',
    date: '2022.9.29',
    views: 254,
    intro:
      '1.技术介绍前端：vue + vuex + vue-router + axioecurity + Swagger2 + MyBatisPlus + Mysql + Redis +',
    sort: ['#vue', '#javascript'],
    imgSrc: 'http://libertys.cn/img/yuansheng/nilu.png'
  }
]
</script>

<style lang="less" scoped>
.center {
  flex: 1;
  // margin: 0 30px;
  // min-width: 375px;
}
</style>