<template>
  <div>
    <!-- 拼单模块开始 -->
    <div>
      <bill></bill>
    </div>
    <!-- 拼单模块结束 -->

    <!--优惠卷开始-->
    <div class="gap-top">
      <coupon></coupon>
    </div>
    <!--优惠卷结束-->

  </div>
</template>

<script>
  import bill from '../components/getBill'
  import coupon from "../components/coupon";

  export default {
    name: "activity",
    components: {
      bill,
      coupon
    }
  }
</script>

<style scoped>

</style>
