<template>
  <div class="entry shadow-box">
    <div class="entry-left">
      <h2>文章</h2>
      <div class="entry-info">
        <span>日期</span>
        |
        <span>分类</span>
      </div>
      <div class="intro">
        1.技术介绍前端：vue + vuex + vue-router + axios + vuetify + element + echarts 后端：SpringBoot + nginx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis +
      </div>
    </div>
    <div class="entry-right">
      <div class="img"></div>
    </div>
  </div>
</template>

<script setup>
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
  }
  .entry-right {
    flex: 1;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      background-image: url(../../../assets/Headportrait.jpg);
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
    height: 400px;
  }
}
</style>