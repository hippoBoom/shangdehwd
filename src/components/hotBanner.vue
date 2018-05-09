<template>
  <div class="box">
    <div class="init-box xiaoneng">
      <h1 class="box-title">初高中毕业也能自考本科文凭！</h1>
      <swiper :imgArr="imgArr"></swiper>

      <div class="notice">
        <h6><span>注意：</span>学历培训有好老师能事倍功半，公开课是好老师的试金石</h6>
        <h6><span>注意：</span>学历培训要效果，我们提供PICC保险理赔服务</h6>
      </div>

      <statusPort :setTop="setTop"></statusPort>
    </div>
  </div>
</template>

<script>
  import swiper from "./swiper";
  import statusPort from "./statusPart";

  export default {
    name: "hot-banner",
    data() {
      return {
        // hotbanner
        imgArr: [
          {url: require("../assets/images/ban1.jpg")},
          {url: require("../assets/images/ban2.jpg")},
          {url: require("../assets/images/ban3.jpg")}
        ],
        setTop: false
      };
    },
    components: {
      swiper,
      statusPort
    },
    mounted() {
      this.$xiaoneng();
    }
  };
</script>

<style scoped lang="scss">
  .box {
    background: #ffffff;
    padding: 5px 0px;
  }

  .notice {
    padding-top: 15px;
    h6 {
      padding: 10px 0px;
      border-bottom: 1px solid #bbb;
      font-size: 0.9rem;
      font-weight: 300;
      span {
        color: #d53c3e;
      }
    }
  }
</style>
