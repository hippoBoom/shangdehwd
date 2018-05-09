<template>
  <div class="box xiaoneng">
    <h2 class="hot">热</h2>
    <div class="init-box">
      <h1 class="box-title">学历培训，大机构有的活动专区（本周日截止）</h1>
      <ul class="coupon-box">
        <li>
          <div class="coupon-holder">
            <h5 class="coupon-title">马上报名立即领取1000元尚德助学！</h5>
            <div class="coupon-money">
              <h5>&#165;</h5>
              <h5>1000</h5>
            </div>
          </div>
        </li>
                <li>
          <div class="coupon-holder">
            <h5 class="coupon-title">最新班型只需1980元助你考本科！</h5>
            <div class="coupon-money">
              <h5>&#165;</h5>
              <h5>1980</h5>
            </div>
          </div>
        </li>
                <li>
          <div class="coupon-holder">
            <h5 class="coupon-title">PICC保险班符合条件协议理赔！</h5>
            <div class="coupon-money">
              <h5>保险</h5>
              <h5>理赔</h5>
            </div>
          </div>
        </li>
                <li>
          <div class="coupon-holder">
            <h5 class="coupon-title">&nbsp;分期付款<br/>学习无压力</h5>
            <div class="coupon-money">
              <h5>分期</h5>
              <h5>付款</h5>
            </div>
          </div>
        </li>
      </ul>
      <statuspart></statuspart>
    </div>
  </div>
</template>
<script>
import statuspart from "./statusPart";
export default {
  name: "coupon",
  components: {
    statuspart
  },
  mounted() {
    this.$xiaoneng();
  }
};
</script>

<style scoped lang="scss">
.box {
  background: #ffffff;
  padding-top: 5px;
}

.coupon-box {
  li {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }
}

.coupon-holder {
  position: relative;
  .coupon-title {
    padding: 10px 80px 10px 50px;
    background: #e9004f;
    color: #ffffff;
  }
  .coupon-money {
    text-align: center;
    position: absolute;
    right: 0px;
    top: 0px;
    background: yellow;
    padding: 10px 10px;
    &::after {
      content: "";
      position: absolute;
      top: -20px;
      display: block;
      width: 10px;
      height: 100%;
      margin-top: 20px;
      background-size: 20px 8px;

      left: -10px;
      background-color: transparent;
      background-position: 100% 35%;
      background-image: linear-gradient(
          -45deg,
          yellow 25%,
          transparent 25%,
          transparent
        ),
        linear-gradient(-135deg, yellow 25%, transparent 25%, transparent),
        linear-gradient(-45deg, transparent 75%, yellow 75%),
        linear-gradient(-135deg, transparent 75%, yellow 75%);
    }
  }
}
</style>
