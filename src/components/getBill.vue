<template>
  <div class="init-box" style="padding-bottom: 15px;padding-top: 15px">
    <p><img class="img-fluid xiaoneng" src="../assets/images/bill.png" alt=""></p>

    <section class="main-box">

      <!-- 价格 -->
      <div class="price-box xiaoneng">
        <h5>【专科/本科】 上班族提升学历，可拼单免费试听名校课程</h5>
        <ul class="price-holder">
          <li class="left lf">
            <h5>&#165; 0</h5>
            <del>&#165;7980</del>
          </li>
          <li class="right rt">已拼126单 · 5人拼单</li>
        </ul>

        <img class="img-fluid buynotice" src="../assets/images/buynotice.png" alt="">


      </div>


      <div class="scroll-wrap">
        <ul class="scroll-content" :style="top">
          <li v-for="item in billList">
            <div>
              <img class="img-holder" v-bind:src="item.url" alt="">
              <span>{{item.name}}</span>
            </div>
            <div class="bill-holder">
              <div class="lf bill-text">
                <p>还差<span class="bill-person">1人</span>拼成</p>
                <p class="remaining-time">剩余</p>
              </div>
              <div class="lf">
                <button class="btn btn-color" @click="showAlert">去拼单</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 价格 -->

    </section>

    <!--弹出框开始-->
    <div class="alert" v-show="isShow">
      <div class="alert-box">
        <span @click="cancelAlert" class="cancel">X</span>
        <ul class="alert-holder">
          <li>
            <h6>参与课程的拼单</h6>
          </li>
          <li>
            <p>仅剩<span style="color: #d53c3e">1</span>个名额</p>
          </li>
          <li class="img-holder">
            <p>拼主</p>
            <img src="../assets/images/c1.jpg" alt="">
          </li>
          <li>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">微信号</span>
              </div>
              <input type="text" v-model="stPhone" class="form-control" aria-label="Default"
                     aria-describedby="inputGroup-sizing-default">
            </div>
          </li>
          <li>
            <button type="button" @click="submitWx($event)" class="btn btn-color btn-secondary btn-lg btn-block">提交
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!--弹出框结束-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        billList: [
          {
            name: "多肉植物",
            url: require("../assets/images/c1.jpg")
          },
          {
            name: "Sunshy",
            url: require("../assets/images/c2.jpg")
          },
          {
            name: "Y.Jiang",
            url: require("../assets/images/c3.jpg")
          },
          {
            name: "小战士",
            url: require("../assets/images/c4.jpg")
          },
          {
            name: "无间",
            url: require("../assets/images/c5.jpg")
          },
          {
            name: "李哩的猜想",
            url: require("../assets/images/c6.jpg")
          }
        ],
        activeIndex: 0,
        isShow: false,
        stPhone: ""
      };
    },

    computed: {
      top() {
        return `top:${-this.activeIndex * 100}px`;
      },
    },
    methods: {
      showAlert() {
        this.isShow = true;
      },
      cancelAlert() {
        this.isShow = false;
      },
      submitWx(e) {
        this.isShow = false;
        if (this.stPhone == "") {
          alert("请填写您的微信号");
          return false;
        } else {
          alert("恭喜您留言成功");
          interactive.submitMsg(e, "wechat", this.stPhone, "", "微信留言");
        }
      },
    },
    mounted() {
      setInterval(() => {
        this.activeIndex = this.activeIndex < Math.ceil(this.billList.length / 2) - 1 ? this.activeIndex + 1 : 0;
      }, 1500);
      this.$xiaoneng();

    }
  };
</script>

<style lang="scss" scoped>
  p,
  ul {
    padding: 0px;
    margin: 0px;
  }

  .alert-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10000;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.5);
    .alert-holder {
      width: 75%;
      height: 245px;
      padding: 20px 20px;
      background: #ffffff;
      text-align: center;
      border-radius: 8px;
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
      .img-holder {
        text-align: center;
        position: relative;
        p {
          padding: 2px 2px;
          position: absolute;
          left: 90px;
          top: -3px;
          background: orange;
          border-radius: 7px;
          font-size: 12px;
        }
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      li {
        padding-bottom: 10px;
      }
    }
  }

  .price-box {
    padding: 10px 0px;
  }

  .main-box {
    .price-holder {
      padding: 5px 0px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .left {
        vertical-align: bottom;
        h5 {
          display: inline-block;
          padding-right: 5px;
          color: #d53c3e;
        }
      }
    }
  }

  .btn-color {
    background: #d53c3e;
    color: #ffffff;
  }

  .scroll-wrap {
    padding: 5px 0px;
    width: 100%;
    height: 100px;
    overflow: hidden;
    .scroll-content {
      position: relative;
      transition: top 0.5s;
      li {
        height: 50px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eeeeee;
        .img-holder {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .bill-holder {
          text-align: center;
          .bill-text {
            margin-right: 10px;
            .bill-person {
              color: #d53c3e;
            }
            .remaining-time {
              font-size: 11px;
              color: #bbbbbb;
            }
          }
        }
      }
    }
  }

  .buynotice {
    width: 65%;
    height: 65%;
  }
</style>
