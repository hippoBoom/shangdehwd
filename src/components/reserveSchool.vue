<template>
  <div class="init-box">
    <h1 class="box-title">{{title}}</h1>
    <section class="img xiaoneng">
      <img v-bind:src="url" alt="">
    </section>

    <section>
      <form name="messageForm" method="post" action="/message.action" id="messageForm1">
        <div class="row">
          <div class="col">
            <select class="form-control">
              <option value="0">选择您的院校</option>
              <option value="1">武汉大学</option>
              <option value="2">中南财经政法大学</option>
              <option value="3">华中师范大学</option>
            </select>
          </div>
          <div class="col">
            <select class="form-control">
              <option value="0">选择您的专业</option>
              <option value="1">行政管理</option>
              <option value="2">汉语言文学</option>
              <option value="3">英语</option>
              <option value="4">会计</option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <input v-model="stPhone" type="text" class="form-control" placeholder="微信/手机号" aria-label="微信/手机号">
          <div class="input-group-append">
            <button @click='submitWx($event)' class="btn btn-info btn-outline-secondary" type="button">提交</button>
          </div>
        </div>
      </form>
    </section>


    <statuspart></statuspart>

  </div>
</template>

<script>
  import statuspart from "./statusPart";

  export default {
    name: "reserve-school",
    data() {
      return {
        url: require("../assets/images/btn.png"),
        title: "在线预约合适您的培训课程",
        stPhone: ""
      };

    },
    methods: {
      submitWx(e) {
        if (this.stPhone == "") {
          alert("请填写您的微信号");
          return false;
        } else {
          alert("恭喜您留言成功");
          interactive.submitMsg(e, "wechat", this.stPhone, "", "微信留言");
        }
      }
    },
    components: {
      statuspart
    },
    mounted() {
      this.$xiaoneng();
    }
  };
</script>

<style scoped lang="scss">
  .img {
    margin-bottom: 15px;
  }

  div[class="input-group"] {
    margin-top: 15px;
  }
</style>
