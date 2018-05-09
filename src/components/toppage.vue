<template>
  <div class="top-box">
    <div class="tittle">
      <img class="xiaoneng" src="../assets/images/top.png" alt="">
    </div>
    <!--<nav>-->
    <!--<ul class="nav">-->
    <!--<li  class="xiaoneng">费用</li>-->
    <!--<li class="xiaoneng">时间</li>-->
    <!--<li class="xiaoneng">条件</li>-->
    <!--<li class="xiaoneng">流程</li>-->
    <!--<li class="xiaoneng">专业</li>-->
    <!--<li class="xiaoneng">报名</li>-->
    <!--</ul>-->
    <!--</nav>-->
  </div>
</template>


<script>
  export default {
    methods: {},
    mounted() {
      this.$xiaoneng();
    }
  };
</script>

<style scoped lang="scss">
  .top-box {
    position: fixed;
    top: 0px;
    z-index: 999;

    .tittle {
      font-size: 0px;
    }

    .nav {
      display: flex;
      justify-content: space-around;
      font-size: 0.7rem;
      padding: 10px 10px;
      background: #e5e5e5;
    }
  }
</style>
