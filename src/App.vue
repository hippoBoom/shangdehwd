<template>
  <div id="app" class="container-diy">
    <!--登录界面开始-->
    <!--<div v-if="loadingShow">-->
    <!--<loading></loading>-->
    <!--</div>-->
    <!--登录界面结束-->
    <div>
      <section class="body-box">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </section>

      <!--头部开始-->
      <topPage></topPage>
      <!--头部结束-->

      <!-- 底部导航栏开始 -->
      <footerPage></footerPage>
      <!-- 底部导航栏结束 -->
    </div>


  </div>
</template>

<script>
  import topPage from "./components/toppage";
  import footerPage from "./components/footerpage";

  export default {
    name: "App",
    data() {
      return {

        loadingShow: true
      };
    },
    mounted() {
      this.$xiaoneng()
    },
    components: {
      topPage,
      footerPage,
    }
  };
</script>

<style lang="scss">
  @import "./style/common";

  #app {

    .body-box {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .alert {
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 10000;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      .alert-box {
        padding: 20px 15px;
        width: 99%;
        background: #ffffff;
        border-radius: 5px;
        position: relative;
        .cancel {
          position: absolute;
          top: -15px;
          right: -15px;
          background: #eeeeee;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-align: center;
          line-height: 30px;
          color: #bbbbbb;
        }
      }
    }
    a {
      text-decoration: none;
      color: #333;
    }

    a:hover, a:active {
      text-decoration: none;
      color: #D53C3E;
    }
  }
</style>
