<template>
  <div class="init-box xiaoneng">
    <h1 class="box-title">知名老师在线指导</h1>
    <swiper :imgArr="imgArr"></swiper>
    <statuspart></statuspart>
  </div>
</template>

<script>
  import swiper from "./swiper";
  import statuspart from "./statusPart";

  export default {
    name: "teacher",
    data() {
      return {
        imgArr: [
          {url: require("../assets/images/tea1.png")},
          {url: require("../assets/images/tea2.jpg")},
          {url: require("../assets/images/tea3.jpg")},
          {url: require("../assets/images/tea4.jpg")}
        ]
      };
    },
    components: {
      swiper,
      statuspart
    },
    mounted() {
      this.$xiaoneng();
    }
  };
</script>

<style scoped lang="scss">

</style>
