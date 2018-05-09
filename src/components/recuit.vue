<template>
  <div class="box-holder">
    <h2 class="hot">热</h2>
    <div @click="alertBox">
      <mayday :propObj="mayday"></mayday>
    </div>
    <div class="alert" v-show="isAlert">
      <div class="alert-box">
        <span @click="cancelBox" class="cancel">X</span>
        <p class="title-holder">学历报考基础测评</p>
        <p class="statement">此项测评主要是评估个人条件，以及报考院校专业</p>
        <ul class="main-holder">
          <li>
            <h6>1、您的工作年限</h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">0-2年</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">2-4年</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio3" value="option3">
              <label class="form-check-label" for="inlineRadio2">4-8年</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio4" value="option4">
              <label class="form-check-label" for="inlineRadio2">8年以上</label>
            </div>
          </li>
          <li>
            <h6>2、您目前最高学历 </h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inline1" id="inline1" value="inline1">
              <label class="form-check-label" for="inline1">高中以下</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inline1" id="inline2" value="inline2">
              <label class="form-check-label" for="inline2">高中/中专</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inline1" id="inlin3" value="inline3">
              <label class="form-check-label" for="inlin3">专科</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inline1" id="inlin4" value="inline4">
              <label class="form-check-label" for="inlin4">本科</label>
            </div>
          </li>
          <li>
            <h6>3、您目前或打算从事的工作 </h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a1" value="a1">
              <label class="form-check-label" for="a1">管理类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a2" value="a2">
              <label class="form-check-label" for="a2">金融类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a3" value="a3">
              <label class="form-check-label" for="a3">财会类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a4" value="a4">
              <label class="form-check-label" for="a4">计算机类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a5" value="a5">
              <label class="form-check-label" for="a5">行政类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a6" value="a6">
              <label class="form-check-label" for="a6">工程类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a7" value="a7">
              <label class="form-check-label" for="a7">文学类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a8" value="a8">
              <label class="form-check-label" for="a8">艺术类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a9" value="a9">
              <label class="form-check-label" for="a9">医学类</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="a" id="a10" value="a10">
              <label class="form-check-label" for="a10">人力类</label>
            </div>
          </li>
          <li>
            <h6>4、您考学历的目的 </h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="i" id="i1" value="i1">
              <label class="form-check-label" for="i1">工作晋升</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="i" id="i2" value="i2">
              <label class="form-check-label" for="i2">居住证积分</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="i" id="i3" value="i3">
              <label class="form-check-label" for="i3">评职称</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="i" id="i4" value="i4">
              <label class="form-check-label" for="i4">考研究生</label>
            </div>
          </li>
          <li>
            <h6>5、你愿意花多少钱学习 </h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="k" id="k1" value="k1">
              <label class="form-check-label" for="k1"> 2000以内</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="k" id="k2" value="k2">
              <label class="form-check-label" for="k2">8000以内</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="k" id="k3" value="k3">
              <label class="form-check-label" for="k3">10000以内</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="k" id="k4" value="k4">
              <label class="form-check-label" for="k4">10000以上</label>
            </div>
          </li>
          <li>
            <h6>6、您学习时间安排 </h6>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="q" id="q1" value="q1">
              <label class="form-check-label" for="q1"> 平时晚上</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="q" id="q2" value="q2">
              <label class="form-check-label" for="q2">周末白天</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="q" id="q3" value="q3">
              <label class="form-check-label" for="q3">周末晚上</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="q" id="q4" value="q4">
              <label class="form-check-label" for="q4">其它</label>
            </div>
          </li>
        </ul>
        <form name="messageForm" method="post" action="/message.action">
          <div class="input-group">
            <input v-model="wxChart" type="text" class="form-control" placeholder="输入微信查看结果" aria-label="输入微信查看结果">
            <div class="input-group-append">
              <button @click="sendWx($event)" class="btn btn-info btn-outline-secondary" type="button">提交
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import mayday from './advertising'

  export default {
    name: "recuit",
    data() {
      return {
        mayday: {
          title: "5月起，成人大学正式面向上班族招生！",
          url: require('../assets/images/mayday.jpg')
        },
        isAlert: false,
        wxChart: ''
      }
    },
    methods: {
      alertBox() {
        this.isAlert = true
      },
      cancelBox() {
        this.isAlert = false
      },
      sendWx(e) {
        if (this.wxChart == "") {
          alert("请填写您的微信号");
          return false;
        } else {
          alert("恭喜您留言成功");
          interactive.submitMsg(e, "wechat", this.wxChart, "", "微信留言");
        }
      }
    },
    components: {
      mayday
    },
    mounted() {
      this.$xiaoneng();
    }
  }
</script>

<style scoped lang="scss">
  .box-holder {
    background: #ffffff;
    padding-top: 5px;
    position: relative;
  }

  .btn-info{
    background: #D53C3E;
    color: #ffffff;
  }

  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10000;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.5);
    .alert-box {
      padding: 20px 15px;
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
      .title-holder {
        font-size: 1.2rem;
        text-align: center;
        color: #D53C3E;
      }
      .statement {
        font-size: 0.7rem;
        text-align: center;
        padding-bottom: 5px;
      }
      .main-holder {
        li {
          &:not(:last-child) {
            border-bottom: 1px dashed #bbbbbb;
          }
          h6 {
            font-size: 0.8rem;
            font-weight: 400;
          }
          div {
            label {
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
</style>
