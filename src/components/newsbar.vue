<template>
  <div class="news-bar">
    <div class="box">
      <p class="text-holder" v-html="adData.title"></p>
      <p class="img-holder">
        <img :src="adData.url" alt="">
      </p>
    </div>
    <statuspart></statuspart>
  </div>
</template>

<script>
  import statuspart from './statusPart'

  export default {
    name: "newsbar",
    props: {
      adData: {
        type: Object,
        default: {}
      }
    },
    components: {
      statuspart
    }
  }
</script>

<style scoped lang="scss">
  .news-bar {
    padding-top: 5px;
    border-bottom: 1px solid #eeeeee;
    .box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 5px;
      padding-right: 10px;
      .img-holder {
        width: 120px;
        flex-shrink: 0;
        padding-left: 5px;
      }
      .text-holder {
        font-size: 1rem;
      }
    }
  }
</style>
