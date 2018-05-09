<template>
  <div class="init-box">
    <div @click="alertBox">
      <guidance :adData="adData"></guidance>
    </div>
    <!--弹出框开始-->
    <div class="alert" v-show="isAlert">
      <div v-show="isNext" class="alert-box">
        <span @click="cancelBox" class="cancel">X</span>
        <h6>2018年报考指南</h6>
        <ul class="main-text">
          <li>
            <p class="lf title-holer">第一步：</p>
            <div class="lf text-holer">
              <p class="title-bg">选专业</p>
              <div>
                <p>热门院校专业推荐</p>
                <p>看看有哪些热门专业</p>
              </div>
              <div>
                <p>如何选专业</p>
                <p>自考大牛关于选专业的建议</p>
              </div>
              <!--<p>自考专业目录</p>-->
              <!--<span>2018年自考专业目录一览</span>-->
            </div>
          </li>
          <li>
            <p class="lf title-holer">第二步：</p>
            <div class="lf text-holer">
              <p class="title-bg">新生注册</p>
              <div>
                <p>报名条件</p>
                <p>入学无需考试</p>
              </div>
              <div>
                <p>注册流程</p>
                <p>首次参加自考需网上进行新生注册</p>
              </div>

              <!--<p>注意事项</p>-->
              <!--<span>网上缴费后注册生效</span>-->
            </div>
          </li>
          <li>
            <p class="lf title-holer">第三步：</p>
            <div class="lf text-holer">
              <p class="title-bg">报名考试</p>
              <div>
                <p>考试时间</p>
                <p>每年4月、10月开考两次</p>
              </div>
              <div>
                <p>报考时间及报考入口</p>
                <p>2018年4月自考报名时间/入口汇总</p>
              </div>

              <!--<p>报考流程</p>-->
              <!--<span>提前打印准考证</span>-->
            </div>
          </li>
          <li>
            <p class="lf title-holer">第四步：</p>
            <div class="lf text-holer">
              <p class="title-bg">毕业</p>
              <div>
                <p>毕业实践与论文</p>
                <p>大部分专科专业无实践考核</p>
              </div>
              <div>
                <p>申请毕业</p>
                <p>一年两次办理</p>
              </div>

              <!--<p>申请学位</p>-->
              <!--<span>学信网可查</span>-->
            </div>
          </li>
        </ul>
        <div class="btn-box">
          <button @click="nextP" type="button" class="btn btn-color btn-lg btn-block">更多问题在线咨询</button>
        </div>
      </div>
      <div v-show="!isNext" class="alert-box">
        <span @click="cancelBox" class="cancel">X</span>
        <p style="padding: 15px">注册成为尚德学员，自考资讯一览 </p>
        <form name="messageForm" method="post" action="/message.action">
          <div class="input-group">
            <input v-model="details" type="text" class="form-control" placeholder="输入微信号查看详情" aria-label="输入微信查看结果">
            <div class="input-group-append">
              <button @click="sendWx($event)" class="btn btn-info btn-outline-secondary" type="button">提交</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--弹出狂结束-->
  </div>
</template>

<script>
  import guidance from './newsbar'
  import statusPart from "./statusPart";

  export default {
    name: "examination",
    data() {
      return {
        isAlert: false,
        isNext: true,
        details: '',
        adData: {
          title: '2018年报考指南，报考流程一览。',
          url: require('../assets/images/n1.jpg')
        }
      }
    },
    components: {
      statusPart,
      guidance
    },
    methods: {
      alertBox() {
        this.isAlert = true
      },
      cancelBox() {
        this.isAlert = false
        this.isNext = true
      },
      sendWx(e) {
        this.isAlert = true
        if (this.details == "") {
          alert("请填写您的微信号");
          return false;
        } else {
          alert("恭喜您留言成功");
          interactive.submitMsg(e, "wechat", this.details, "", "微信留言");
        }
      },
      nextP() {
        this.isNext = false
      }
    },
  }
</script>

<style scoped lang="scss">

  .main-text {
    li {
      &:not(:last-child) {
        .text-holer {
          border-bottom: 1px solid #bbbbbb;
        }
      }
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      .title-holer {
        color: #D53C3E;
        width: 25%;
      }
      .text-holer {
        width: 75%;
        border-left: 1px solid #bbbbbb;
        padding-left: 10px;
        div {
          background: #eeeeee;
          p {
            /*标题*/
            &:first-child {
              font-size: 0.8rem;
              font-weight: 700;
            }
            /*内容*/
            &:last-child {
              font-size: 0.8rem;
            }
          }
        }
        .title-bg {
          color: #D53C3E;
        }
        span {
          font-size: 0.5rem;
        }
      }
    }
  }


</style>
