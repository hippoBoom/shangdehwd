<template>
  <div class="init-box">
    <section class="title-holder">
      <h6 class="box-title">湖北省重点名校预览(主考院校和主考专业预览)</h6>
      <p>尚德机构与学校无代招生、代报考、委培等合作关系</p>
    </section>

    <section class="scroll-holder">
      <ul>
        <li v-for="(item,ondex) in schoolArr">
          <template v-for="(items,iindex) in item">
            <div class="school-box xiaoneng" @click="selSchool(ondex,iindex)">
              <div class="school-holder lf">
                <p>{{items.title}}</p>
                <p class="line"></p>
                <p class="text-holder">{{items.ft}}</p>
                <p class="text-holder">{{items.lt}}</p>
              </div>
              <div class="img-holder rt">
                <img class="img-fluid" v-bind:src="items.url" alt="">
              </div>
            </div>
          </template>
        </li>
      </ul>
    </section>

    <!--<div class="alert" v-show="isShow">-->
    <!--<div class="alert-box">-->
    <!--<span @click="cancelAlert" class="cancel">X</span>-->
    <!--<div class="school-info">-->
    <!--<h6>{{tempObj.title}}</h6>-->
    <!--<p v-html="tempObj.info"></p>-->
    <!--</div>-->
    <!--<div class="school-text">-->
    <!--<div>-->
    <!--<p>{{tempObj.ft}}</p>-->
    <!--<i></i>-->
    <!--<p v-html="tempObj.ftinfo"></p>-->
    <!--</div>-->
    <!--<div>-->
    <!--<p>{{tempObj.lt}}</p>-->
    <!--<i></i>-->
    <!--<p v-html="tempObj.ltinfo"></p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>

  export default {
    data() {
      return {
        schoolArr: [
          [
            {
              title: '武汉大学',
              ft: '汉语言文学',
              ftinfo: '专业介绍：行政管理系统是一类组织系统。它是社会系统的一个重要分系统。随着社会的发展，行政管理的对象日益广泛，包括经济建设、文化教育、市政建设、社会秩序、公共卫生、环境保护、公共建设等各个方面。<br />培养方向：毕业后适合到各级党政机关、社会组织、企事业单位从事行政管理、政策研究、管理规划、外事交流、宣传策划、机关管理、人事管理、高级文秘等工作。',
              lt: '行政管理',
              ltinfo: '专业介绍：汉语言文学专业主要培养掌握汉语和中国文学方面的基本知识，受到有关理论、发展历史、研究现状等方面的系统教育和业务能力的基本训练，可在科研机关、高等院校从事研究、教学工作、有的可从事对外汉语教学。<br/> 培养方向：可适宜在党政机关，包括报刊宣传、新闻出版、影视文化、互联网、对外交流其他企事业部门从事语言文字工作的专门人才。',
              url: require('../assets/images/img_01.jpg'),
              info: '武汉大学（Wuhan University），简称“武大”，是一所位于湖北武汉市的中国重点综合研究型大学，其办学源头溯源于清朝末期1893年湖广总督张之洞奏请清政府创办的自强学堂，是近代中国建立最早的国立大学，已有一百多年历史。1913年为六大国立高师之一的国立武昌高等师范学校， 1926年更名为国立第二中山大学，1928年定名国立武汉大学，是民国四大名校之一。1949年更名武汉大学沿用至今。'
            },
            {
              title: '华中科技大学',
              lt: '新闻学',
              ltinfo: '专业介绍：新闻学是研究新闻事业和新闻工作规律的科学。新闻学是以人类社会客观存在的新闻现象作为自己的研究对象，研究的重点是新闻事业和人类社会的关系，探索新闻事业的产生、发展的特殊规律和新闻工作的基本要求的一门科学。<br />',
              ft: '机电一体化工程',
              ftinfo: '专业介绍：机电一体化又称机械电子学，英文称为Mechatronics，它是由英文机械学mechanics的前半部分与电子学electronics的后半部分组合而成，机电一体化最早出现在1971年日本杂志《机械设计》的副刊上。机电一体化是由计算机技术、信息技术、机械技术、电子技术、控制技术、光学技术等相融合构成的一门独立的交叉学科。机电一体化主要发展方向为智能化，模块化，网络化，微型化，系统化等。<br />培养方向：机电一体化技术专业是培养以机械学和电子学为基础，熟悉现代机械制造的基本理论、技术和装备，具有机电一体化产品和技术的运用和开发能力的高等技术应用性专门人才。',
              url: require('../assets/images/img_02.jpg'),
              info: '华中大是中华人民共和国教育部直属的综合性研究型全国重点大学，中央直管副部级高校，国家首批“双一流”、“985工程”、“211工程”、“2011计划”重点建设高校，“卓越工程师教育培养计划”、“卓越医生教育培养计划”、“111计划”、“海外高层次人才引进计划”、“国家建设高水平大学公派研究生项目”、“教育部来华留学示范基地”入选高校，是21世纪学术联盟、中俄工科大学联盟、中欧工程教育平台、七校联合办学、国家海外高层次人才创新创业基地成员，与国家卫生和计划生育委员会共建医学院，是拥有国家实验室和国家大科学中心的四所大学之一，是与清华大学一同被美国制造工程师协会（SME）授予“大学领先奖”的两所中国大学之一。入选《Nature》评出的“中国十大科研机构”，被称作“新中国高等教育发展的缩影”。'
            }
          ],
          [
            {
              title: '华中师范大学',
              ft: '学前教育',
              ftinfo: '专业介绍：学前教育专业培养具备学前教育专业知识，能在托幼机构从事保教和研究工作的教师学前教育行政人员以及其他有关机构的教学、研究人才。<br />培养方向：主要研究托儿所幼儿园教育。',
              lt: '数学教育',
              ltinfo: '专业介绍：数学教育是一种社会文化现象，其社会性决定了数学教育要与时俱进，不断创新．数学教育中的教育目标、教育内容、教育技术等一系列问题都会随着社会的进步而不断变革与发展。<br />培养方向：至少有来自于九个方面的考虑：知识经济、社会关系、家庭压力、国际潮流、考试改革、科教兴国、深化素质教育、普及义务教育、科技进步。',
              url: require('../assets/images/img_03.jpg'),
              info: '华中师范大学（Central China Normal University），简称“华师”，是中华人民共和国教育部直属的一所师范类、综合性研究型全国重点大学，是国家“211工程”、“985工程优势学科创新平台”重点建设院校，国家首批“双一流”世界一流学科建设高校 [1]  ，入选“2011计划”、“111计划”、“海外高层次人才引进计划（千人计划）”、“教育部来华留学示范基地”，是中日人文交流大学联盟高校 [2]  ，武汉七校联合办学成员，国家首批博士、硕士学位授予权的单位，国家师范生免费教育试点高校，中国政府奖学金来华留学生接收院校，国家培养中、高等学校师资和其他高级专门人才的重要基地。'
            },
            {
              title: '武汉理工大学',
              ft: '企业财务管理',
              ftinfo: '专业介绍：企业财务管理是在一定的整体目标下，关于资产的购置（投资）,资本的融通（筹资）和经营中现金流量（营运资金）,以及利润分配的管理。<br />培养方向：通过价值形态对企业资金运动进行决策、计划和控制的综合性管理。',
              lt: '环境艺术设计',
              ltinfo: '专业介绍：环境艺术设计通过一定的组织、围合手段、对空间界面（室内外墙柱面、地面、顶棚、门窗等）进行艺术处理（形态、色彩、质地等），运用自然光、人工照明、家具、饰物的布置、造型等设计语言，以及植物花卉、水体、小品、雕塑等的配置，使建筑物的室内外空间环境体现出特定的氛围和一定的风格，来满足人们的功能使用及视觉审美上的需要。<br/>培养方向：环境艺术所涉及的学科很广泛，包括建筑学、城市规划学、人类工程学、环境心理学、设计美学、社会学、文学、史学、考古学、宗教学、环境生态学、环境行为学等学科。',
              url: require('../assets/images/img_04.jpg'),
              info: '武汉理工大学是中华人民共和国教育部直属的理工类全国重点大学，由国家教育部、交通运输部、国家海洋局、国家国防科技工业局共建，是国家首批“211工程”、“985工程优势学科创新平台”重点建设高校，国家首批“双一流”世界一流学科建设高校，是“111计划”、“卓越工程师教育培养计划”、“海外高层次人才引进计划”、“国家建设高水平大学公派研究生项目”等重点建设的中国高水平研究型大学。'
            }
          ],
          [
            {
              title: '中南财经政法大学',
              lt: '工商企业管理',
              ft: '会计',
              url: require('../assets/images/img_05.jpg')
            },
            {
              title: '华中农业大学',
              ft: '农学',
              lt: '机电一体化工程',
              url: require('../assets/images/img_06.jpg')
            }
          ]
        ],
        isShow: false,
        tempObj: ''
      }
    },
    methods: {
      selSchool(oindex, iindex) {
        this.isShow = true
        this.tempObj = this.schoolArr[oindex][iindex]
        console.log(this.tempObj)
      },
      cancelAlert() {
        this.isShow = false
      }
    },
    mounted() {
      this.$xiaoneng()
    }
  }
</script>

<style scoped lang="scss">
  $line-color: #cccccc;
  .init-box {
    padding-top: 10px;
  }

  .box-title {
    word-break: break-all;
    white-space: nowrap;
  }

  .title-holder {
    p {
      font-size: 0.7rem;
      color: #bbbbbb;
    }
  }

  .scroll-holder {
    padding: 15px 0px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      display: flex;
      li {
        flex-shrink: 0;
        &:not(:last-child) {
          margin-right: 15px;
        }
        div {
          &:first-child {
            margin-bottom: 15px;
          }
        }
        .school-box {
          width: 240px;
          height: 80px;
          border: 1px solid $line-color;
          border-radius: 4px;
          .school-holder {
            width: 55%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            .line {
              border-top: 1px solid $line-color;
              margin: 2px 0px;
            }
            .text-holder {
              font-size: 0.6rem;
              color: #bbbbbb;
            }
          }
          .img-holder {
            width: 45%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 10px;
            img {
              width: 60%;
            }
          }
        }
      }
    }
  }

  .school-info {
    padding-bottom: 10px;
    border-bottom: 1px dashed #bbbbbb;
    p {
      height: 100px;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .school-text {
    margin-top: 10px;
    div {
      &:first-child {
        padding-bottom: 10px;
        border-bottom: 1px dashed #bbbbbb;
      }
      &:last-child {
        margin-top: 10px;
      }
      i {
        display: block;
        width: 30px;
        border-top: 1px solid #bbbbbb;
        padding-bottom: 5px;
      }
      p {
        &:first-child {
          color: #D53C3E;
        }
        &:last-child {
          height: 100px;
          overflow: scroll;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }
</style>
