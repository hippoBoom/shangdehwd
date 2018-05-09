<template>
  <ul class="status-box">
    <li class="lf" v-if="setTop"><h1 class="setTop">置顶</h1></li>
    <li class="title lf">
      <h1 class="lf">尚德学院</h1>
      <p class="lf"><img src="../assets/images/v.png" alt=""></p>
    </li>
    <li class="lf"><h1>5374评论</h1></li>
    <li class="lf"><h1>{{systemDate}}</h1></li>
    <li class="rt cannel-box"><b>&times;</b></li>
  </ul>
</template>

<script>
export default {
  name: "status-part",
  props: {
    setTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    systemDate() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      return `${h}:${m}`;
    }
  }
};
</script>

<style scoped lang="scss">
.status-box {
  color: #bbbbbb;
  padding: 5px 0px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  li:not(:last-child) {
    padding-right: 10px;
    h1 {
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
  .setTop {
    border: 1px solid #d53c3e;
    color: #d53c3e;
    padding: 0px 8px;
    border-radius: 5px;
  }
  .title {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    p {
      position: relative;
      top: -4px;
      left: 3px;
      width: 15px;
      height: 15px;
    }
  }
  .cannel-box {
    border: 1px solid #bbb;
    min-width: 30px;
    border-radius: 19px;
    position: relative;
    top: 3px;
    text-align: center;
    height: 15px;
    line-height: 12px;
    font-size: 1.2rem;
  }
}
</style>
