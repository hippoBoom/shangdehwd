<template>
  <div>

    <!--人气导师开始-->
    <div class="">
      <hotTeacher :propObj="hotTeacherTitle"></hotTeacher>
    </div>
    <!--人气导师结束-->

    <!--预约学校开始-->
    <div class="gap-top">
      <educationClassify></educationClassify>
    </div>
    <!--预约学校结束-->
    <!--尚德老师开始-->
    <div class="gap-top">
      <shangdeteacher></shangdeteacher>
    </div>
    <!--尚德老师结束-->
  </div>
</template>

<script>
  import shangdeteacher from "../components/teacher";
  import educationClassify from "../components/educationClassify";
  import hotTeacher from "../components/advertising";

  export default {
    name: "weal",
    data() {
      return {
        // 人气导师
        hotTeacherTitle: {
          title: "人气导师，自考介绍以及热门专业解密",
          url: require("../assets/images/page5.png")
        },
      }
    },
    components: {
      shangdeteacher,
      educationClassify,
      hotTeacher
    }
  }
</script>

<style scoped>

</style>
