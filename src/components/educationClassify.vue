<template>
  <div class="init-box">
    <h1 class="box-title">提升学历哪种方式认可度高？不同方式报名条件？ </h1>
    <ul class="row img-holder xiaoneng">
      <template v-for="item in imgObj">
        <li class="col">
          <img class="img-fluid" v-bind:src="item.url" alt="">
          <p><span>{{item.title}}</span></p>
        </li>
      </template>
    </ul>
    <!--<ul class="questions-holder">-->
    <!--<li> 哪种方式认可度高？</li>-->
    <!--<li> 不同方式报名条件？</li>-->
    <!--</ul>-->
    <div class="weichat-holder">
      <form name="msf" method="post" action="/message.action">
        <div class="input-group">
          <input v-model="stPhone" type="text" class="form-control" placeholder="输入微信查看结果" aria-label="输入微信查看结果">
          <div class="input-group-append">
            <button @click='wxSubmit($event)' class="btn btn-info btn-outline-secondary" type="button">提交</button>
          </div>
        </div>
      </form>
    </div>
    <statuspart></statuspart>
  </div>
</template>

<script>
  import statuspart from "./statusPart";

  export default {
    data() {
      return {
        imgObj: [
          {
            url: require("../assets/images/ed1.jpg"),
            title: "自考培训"
          },
          {
            url: require("../assets/images/ed2.jpg"),
            title: "成考咨询"
          },
          {
            url: require("../assets/images/ed3.jpg"),
            title: "专升本"
          },
          {
            url: require("../assets/images/ed4.jpg"),
            title: "专本连读"
          }
        ],
        stPhone: ""
      };
    },
    methods: {
      wxSubmit(e) {
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
  .img-holder {
    padding-bottom: 5px;
    li {
      position: relative;
      padding: 0px 4px;
      p {
        text-align: center;
      }
    }
  }

  .questions-holder {
    padding-top: 5px;
    border-top: 1px solid #bbb;
    li {
      padding: 5px 0px;
      font-size: 0.9rem;
      border-bottom: 1px solid #bbb;
    }
  }

  .weichat-holder {
    margin-top: 15px;
  }
</style>
