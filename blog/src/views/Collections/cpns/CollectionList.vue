<template>
  <div class="collection-list">
    <template v-for="child in sortList"
              :key="child.id">
      <div class="sort-item">
        <h3>{{child.sortName}}</h3>
        <div class="list">
          <div class="item shadow-box"
               v-for="item in child.item"
               :key="item.itemName">
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
import { defineProps } from 'vue'
defineProps({
  sortList: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.collection-list {
  .sort-item {
    // height: 200px;
    background-color: white;

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