<template>
  <div class="init-box">
    <div @click="open">
      <newbar :adData="adData"></newbar>
    </div>

    <!--弹出框开始-->
    <div v-show="isShow" class="alert">
      <div class="alert-box">
        <span @click="cancelBox" class="cancel">X</span>
        <p class="text-holder">自考热门问题</p>
        <collapse :getdata="collapseData"></collapse>
        <div>
          <button type="button" class="btn btn-color btn-lg btn-block xiaoneng">向尚德提问</button>
        </div>
      </div>
    </div>
    <!--弹出框结束-->
  </div>
</template>

<script>
  import ads from './advertising'
  import collapse from './collapse'
  import newbar from './newsbar'

  export default {
    name: "edutrue",
    data() {
      return {
        isShow: false,
        //job
        adData: {
          title: "自考文凭有用吗？自考和成考的区别？",
          url: require('../assets/images/n3.jpg'),
        },
        collapseData: [
          {
            title: '什么是自考?',
            text: '自考就是自学考试，考生通过自主或者借助辅导机构进行学习，通过相应的考试后，即可取得大学专科或本科的毕业证书。'
          },
          {
            title: '自考需要读几年？多久毕业？',
            text: '自考没有学制限制，只要考完报考专业的所有科目并通过即可申请毕业，一般1.5年到2.5年就能毕业，相关时间政策根据当年政策情况变化。一般实际的毕业时间，根据考生可支配的学习时间而定。'
          },
          {
            title: '自考和成考有什么区别？哪个认可度高？',
            text: '一、文凭不同：成人高考的文凭是各大学的成教学院发的，你考上了哪个大学的成教，毕业时就会盖有哪个大学的章；自考的文凭上盖有两个章，一个是主考院校的章，另一个是当地自考委的章。<br />  二、考试方式：成人高考要参加国家统一的成人高考考试，达到分数线后才能入学就读，考试形式类似于普通高考，考前要填志愿。自考不需参加入学考试，选好专业后，按课程设置学习，每通过一科，就可获得单科合格证，该专业的所有课程通过后，即可用所有的单科合格证换取毕业证书。 <br />三、 学习方式不同：成考的学习方式很多，大致分为：脱产全日制、夜大学、函授三种。如果你有充足的精力与财力，你可以选择脱产学习，体验真正的大学生活；如果你一边在工作一边还想给自己充电，可以选择夜大学；如果你想上外地的著名大学，也可以足不出户的学习—函授。而自考，则是已自学为主，当然，目前有许多城市都设有自考的全日制或业余辅导班。 '
          },
          {
            title: '自考报名需有什么条件?',
            text: '自考的报考条件设置的门槛比统招高考的低很多，对年龄、性别、民族、种族、居住地、已受教育程度都不设限，且免入学考试，只要是中国公民均可报考。考生通过了所选专业的所有科目的考试，就可申请办理自考文凭。但是报考自考本科考生需在毕业前交验国家承认的专科学历证书，否则无法申领自考本科毕业证。'
          },
          {
            title: '自考大概是什么流程?',
            text: '1、选专业 <br /> 2、自考办报名后拍照、拿准考证  <br />3、报考科目(网上报名或则指定的银行现场缴费报名)<br />4、看书复习<br />5、自考前一周左右到网络上打印准考号<br />6、考试'
          }
        ]
      }
    },
    components: {
      ads,
      collapse,
      newbar
    },
    methods: {
      open() {
        this.isShow = true
      },
      cancelBox() {
        this.isShow = false
      }
    },
    mounted() {
      this.$xiaoneng()
    }
  }
</script>

<style scoped lang="scss">
  .alert-box {
    width: 99%;
  }

  .text-holder {
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    padding-bottom: 5px;
    margin-bottom: 15px;
    border-bottom: 1px dashed #bbbbbb;
  }

  .btn-color {
    margin-top: 10px;
  }
</style>
