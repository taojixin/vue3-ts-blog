<template>
  <div class="about page-common">
    <div class="content">
      <Content :dataList="data"
               v-model="currHigh"
               :selecteBar="selecteBar"></Content>
      <SideBar :dataList="data"
               :currHigh="currHigh"
               @selectedIndexBar="selectedIndexBar"></SideBar>
    </div>
  </div>
</template>

<script setup>
import Content from '@/components/IndexBar/Content.vue'
import SideBar from '@/components/IndexBar/SideBar.vue'
import { ref } from 'vue'

const data = ref([
  {
    id: 1,
    title: 'A',
    content: 'a'
  },
  {
    id: 2,
    title: 'B',
    content: 'b'
  },
  {
    id: 3,
    title: 'C',
    content: 'c'
  },
  {
    id: 4,
    title: 'D',
    content: 'd'
  },
  {
    id: 5,
    title: 'E',
    content: 'a'
  },
  {
    id: 6,
    title: 'F',
    content: 'a'
  },
  {
    id: 7,
    title: 'G',
    content: 'a'
  },
  {
    id: 8,
    title: 'H',
    content: 'a'
  },
  {
    id: 9,
    title: 'I',
    content: 'a'
  },
  {
    id: 10,
    title: 'J',
    content: 'a'
  },
  {
    id: 11,
    title: 'K',
    content: 'a'
  }
])
const currHigh = ref('')
const selecteBar = ref('')
const selectedIndexBar = (title) => {
  selecteBar.value = title
}
</script>
<style lang="less" scoped>
.about {
  margin-top: 60px;
  .content {
    position: relative;
    top: 60px;
  }
}
</style>