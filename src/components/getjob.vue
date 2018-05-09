<template>
  <div class="init-box">
    <div @click="openAlert">
      <newsbar :adData="adData"></newsbar>
    </div>
    <!--弹出框开始-->
    <div class="alert" v-show="isShow">
      <div class="alert-box">
        <span @click="cancelAlert" class="cancel">X</span>
        <p class="title-holder"> 热门专业推荐</p>
        <ul class="main-holder xiaoneng">
          <li>
            <div class="lf">
              <p>行政管理专业</p>
              <span>专业介绍/就业介绍/全国就业率	 </span>
            </div>
            <div class="lf">
              <p>人力资源管理</p>
              <span>专业介绍/就业介绍/全国就业率</span>
            </div>
          </li>
          <li>
            <div class="lf">
              <p>金融学</p>
              <span>专业介绍/就业介绍/全国就业率	 </span>
            </div>
            <div class="lf">
              <p>法学</p>
              <span>专业介绍/就业介绍/全国就业率</span>
            </div>
          </li>
          <li>
            <div class="lf">
              <p>学前教育</p>
              <span>专业介绍/就业介绍/全国就业率	 </span>
            </div>
            <div class="lf">
              <p>汉语言文学</p>
              <span>专业介绍/就业介绍/全国就业率</span>
            </div>
          </li>
          <li>
            <div class="lf">
              <p>英语</p>
              <span>专业介绍/就业介绍/全国就业率	 </span>
            </div>
            <div class="lf">
              <p>市场营销</p>
              <span>专业介绍/就业介绍/全国就业率</span>
            </div>
          </li>
          <li>
            <div class="lf">
              <p>工商管理</p>
              <span>专业介绍/就业介绍/全国就业率	 </span>
            </div>
            <div class="lf">
              <p>会计学</p>
              <span>专业介绍/就业介绍/全国就业率</span>
            </div>
          </li>
        </ul>
        <div class="btn-box">
          <button @click="cancelAlert" type="button" class="btn btn-color btn-lg btn-block xiaoneng">咨询更多报考专业</button>
        </div>
      </div>
    </div>
    <!--弹出框结束-->
  </div>
</template>

<script>
  import newsbar from './newsbar'

  export default {
    name: "getjob",
    data() {
      return {
        isShow: false,
        //job
        adData: {
          title: "10大热门专业推荐？哪些专业就业前景好、工资高？",
          url: require('../assets/images/n2.jpg'),
          xiaoneng: false
        },
      }
    },
    methods: {
      openAlert() {
        this.isShow = true
      },
      cancelAlert() {
        this.isShow = false
      }
    },
    components: {
      newsbar
    }
  }
</script>

<style scoped lang="scss">
  .title-holder {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  .main-holder {
    li {
      border-bottom: 1px dashed #bbbbbb;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      div {
        width: 50%;
        padding: 5px;
        p {
          font-size: 1rem;
        }
        span {
          font-size: 0.6rem;
        }
      }
    }
  }

  .btn-box {
    margin-top: 10px;
  }
</style>
