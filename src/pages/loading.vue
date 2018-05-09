<template>
  <div class="loading-box">
    <div class="img-holder">
      <img v-bind:src="url" alt="">
    </div>
    <div class="text-holder">
      <h1>美股上市公司</h1>
      <h1>带你走进名校课堂</h1>
      <h5>第一家登录美股的成人在线教育机构</h5>
      <div class="en-holder">
        <p>US EQUITY LISTED COMPANIES TAKE YOU INTO THE FAMOUS SCHOOL CLASS</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading",
    data() {
      return {
        url: require('../assets/images/company.jpeg')
      };
    }
  };
</script>

<style scoped lang="scss">
  .loading-box {
    position: absolute;
    top: 0px;
    left: 0px;
    background: #d53c3e;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    .img-holder {
      padding-bottom: 60px;
    }
    .text-holder {
      color: #ffffff;
      text-align: center;
      h1,
      h4,
      p {
        padding: 5px 0px;
      }
      h5 {
        font-weight: 300;
      }
      .en-holder {
        position: relative;
        p {
          font-size: 10px;
          -webkit-transform-origin-x: 0;
          -webkit-transform: translateX(-184px) scale(0.8);
          transform: translateX(-184px) scale(0.8);
          word-break: keep-all; /* 不换行 */
          white-space: nowrap;
          position: absolute;
          left: 50%;

        }
      }
    }
  }
</style>
