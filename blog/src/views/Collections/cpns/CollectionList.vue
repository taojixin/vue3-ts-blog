<template>
  <div class="collection-list">
    <template v-for="child in sortList"
              :key="child.id">
      <div class="sort-item shadow-box">
        <h3 ref="keyBar">{{child.sortName}}</h3>
        <div class="list">
          <div class="item shadow-box"
               v-for="item in child.item"
               :key="item.itemName"
               @click="jump(item.url)">
            <div class="item-box">
              <div class="left">
                <img :src="item.iconUrl"
                     alt="">
              </div>
              <div class="right">
                <div class="title">{{item.itemName}}</div>
                <p>{{item.sketch}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, ref, watch } from 'vue';

const props = defineProps({
  sortList: {
    type: Array,
    default: () => []
  },
  selecteBar: {
    type: String,
    default: () => ''
  }
})
// 页面跳转
const jump = (url) => {
  window.open(url, '_blank')
}

// indexBar
const emit = defineEmits(['update:modelValue'])
const currHigh = ref('常用网页')
const keyBar = ref()
let domArr = []
// 获取每个keyBar到顶部的距离
onMounted(() => {
  keyBar.value.forEach((item) => {
    domArr.push({
      key: item.innerText,
      top: item.offsetTop - 160
    })
  })
  console.log(domArr)
  emit('update:modelValue', currHigh.value)
})
// 监听页面滚动
window.addEventListener('scroll', () => {
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop
  let result = domArr.findIndex((item) => item.top > scrollY)
  currHigh.value = domArr[result - 1]?.key
  emit('update:modelValue', currHigh.value)
})
// 监听选择的selectBar
watch(
  () => props.selecteBar,
  (newValue) => {
    let targetTop = domArr.find((item) => item.key === newValue)?.top
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    })
  }
)
</script>

<style lang="less" scoped>
.collection-list {
  .sort-item {
    // height: 200px;
    background-color: white;
    margin-top: 30px;

    h3 {
      margin: 0;
      height: 22px;
      padding-bottom: 20px;
    }
    .list {
      display: flex;
      justify-items: center;
      flex-wrap: wrap;
      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        min-width: 300px;
        margin: 10px 10px;
        transition: all 0.5s;

        &:hover {
          transform: translateY(5px);
          cursor: pointer;
        }

        .item-box {
          height: 100px;
          display: flex;

          .left {
            width: 100px;
            height: 100px;
            margin-left: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .right {
            flex: 1;
            padding-left: 10px;

            .title {
              font-size: 14px;
              font-weight: bold;
            }
            p {
              size: 12px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>