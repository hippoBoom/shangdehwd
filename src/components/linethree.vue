<template>
  <div class="box">
    <h2 class="hot">热</h2>
    <div class="init-box">
      <h1 class="box-title">考生关注：湖北自考新手报名指导手册 </h1>
      <ul class="row img-holder">
        <template v-for="item in imgObj">
          <li @click="open" class="col">
            <img class="img-fluid" v-bind:src="item.url" alt="">
            <!--<p><span>{{item.title}}</span></p>-->
          </li>
        </template>
      </ul>
      <div v-show="isShow" class="alert">
        <div class="alert-box">
          <span @click="cancelBox" class="cancel">X</span>
          <div class="text-details">
            <h5>湖北省2018年下半年社会自考报名指导手册</h5>
            <div>
              <h6>1.湖北省自考信息发布的平台</h6>
              <p>湖北省自考信息发布的平台为：湖北自考网www.hbzkw.com或湖北省教育考试院网；
                <br> 关于湖北省自考各种相关查询可进入cha.hbzkw.com查询。
                <span class="xiaoneng">[查看全文]</span>
              </p>
              <h6>2.湖北省自考相关信息一览表</h6>
              <p><span>报考对象：</span>
                <br> 在湖北境内工作、学习、生活的公民及其他符合规定的人员，均可报考。
                <br> 考试：2016年起　湖北自考每年组织2次考试，考试时间分别为四月、十月。
                <br><span>现场确认：</span>
                <br> 4月份考期 3月7日截止 <span class="xiaoneng">[具体安排]</span>
                <br> 10月份考期 9月5日截止 <span class="xiaoneng">[具体安排]</span>
                <br> <span>网上报名：</span>
                <br> 4月份考期 3月8日截止 <span class="xiaoneng">[具体安排]</span>
                <br> 10月份考期 9月13日截止 <span class="xiaoneng">[具体安排]</span>
                <br> <span>考试时间：</span>
                <br> 4月份考期 4月14-15日 <span class="xiaoneng">[具体安排]</span>
                <br> 10月份考期 10月20-21日 <span class="xiaoneng">[具体安排]</span>
                <br> <span>考试开考时间：</span>
                <br> 上午9:00开始考试，11:30结束；下午14:30开始考试，17:00结束。
                <br> <span>考试科目：</span>
                <br> 每个专业一般12门左右
                <br> <span>可获证书：</span>
                <br> 专科、本科毕业证书；学位证书
              </p>
              <h6>3.湖北省自考目前共开考多少专业？</h6>
              <p>湖北省目前开考175 个本专科专业，其中本科108 个，专科67个。
                <br> <span style="color: #D53C3E">☆湖北自考专业信息</span>
                <span class="xiaoneng">[查看全文]</span>
              </p>
              <h6>4.湖北省自考报名费
              </h6>
              <p>湖北省自考每报考1门课程，交纳考试费40元，系统委托开考专业还应交纳考试补助费18元。</p>
              <h6>5.湖北省有哪几所主考学校</h6>
              <p>武汉大学 华中科技大学 华中农业大学
                <br> 华中师范大学 武汉理工大学 海军工程大学
                <br> 中南财经政法大学 湖北大学 中国地质大学
                <br> 中南民族大学 江汉大学 空军雷达学院
                <br> 湖北警官学院 湖北中医药大学 湖北省广播电视大学
                <br> 中国人民公安大学 湖北经济学院 长江职业学院
                <br> 三峡大学 武汉科技大学 襄樊学院
                <br><span style="color: #D53C3E">☆湖北省自学考试主考院校一览及联系方式</span>
                <span class="xiaoneng">[查看全文]</span>
              </p>
              <h6>6.湖北省自考的课程考试分几种？</h6>
              <p>湖北省自考课程分为理论知识考试和实践性环节考核两种。
                <br> 因此，报名时间按考试内容分为2类：理论课程考试报名时间、实践性环节考核报名时间。
              </p>
            </div>
          </div>
          <button @click="cancelBox" type="button" class="btn btn-color btn-lg btn-block xiaoneng">考生报名指导免费答疑</button>
        </div>
      </div>
      <statuspart></statuspart>
    </div>
  </div>
</template>

<script>
  import statuspart from "./statusPart";

  export default {
    data() {
      return {
        isShow: false,
        imgObj: [
          {
            url: require("../assets/images/w1.jpg"),
            title: "自考培训"
          },
          {
            url: require("../assets/images/w2.jpg"),
            title: "成考咨询"
          },
          {
            url: require("../assets/images/w3.jpg"),
            title: "专升本"
          }
        ],
      };
    },
    methods: {
      open() {
        this.isShow = true
      },
      cancelBox() {
        this.isShow = false
      }
    },
    components: {
      statuspart
    }
  };
</script>

<style scoped lang="scss">

  .text-details {
    margin-bottom: 10px;
    height: 450px;
    overflow: scroll;
    padding: 5px;
    h6 {
      padding-top: 5px;
    }
    h5 {
      color: #D53C3E;
      text-align: center;
      padding: 5px 0px;
    }
    p {
      color: #5E5E5E;
      word-break: break-all;
      white-space: normal;
      padding: 5px 0px;
      border-bottom: 1px dashed #bbbbbb;
      span[class='xiaoneng'] {
        color: #D53C3E;
      }
      span {
        color: #4C5FA5;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .box {
    background: #ffffff;
    padding-top: 5px;
    padding-bottom: 5px;
  }

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
