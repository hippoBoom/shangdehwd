<template>
  <div>

    <div>
      <recuit></recuit>
    </div>

    <!--横三开始-->
    <div class="gap-top">
      <linethree></linethree>
    </div>
    <!--横三结束-->

    <!--新闻板块开始-->
    <div class="gap-top">
      <examination></examination>
      <getjob></getjob>
      <faqbar></faqbar>
    </div>
    <!--新闻板块结束-->

    <!--名校开始-->
    <div class="gap-top">
      <pointSchool></pointSchool>
    </div>
    <!--名校结束-->


    <!--hotbanner start-->
    <div class="gap-top">
      <hotBanner></hotBanner>
    </div>
    <!--hotbanner end-->

    <!--老师定制开始-->
    <div class="gap-top">
      <costomizationEdu></costomizationEdu>
    </div>
    <!--老师定制结束-->

  </div>
</template>

<script>
  import dataDownload from "../components/advertising";
  import reserveSchool from "../components/reserveSchool";
  import hotBanner from "../components/hotBanner";
  import pointSchool from "../components/pointSchool";
  import costomizationEdu from "../components/costomizationEdu";
  import loading from "../pages/loading";
  import recuit from "../components/recuit";
  import examination from "../components/examination";
  import getjob from "../components/getjob";
  import faqbar from "../components/faqbar";
  import linethree from '../components/linethree'

  export default {
    name: "news",
    components: {
      reserveSchool,
      dataDownload,
      hotBanner,
      pointSchool,
      costomizationEdu,
      loading,
      recuit,
      examination,
      getjob,
      faqbar,
      linethree
    }
  }
</script>

<style scoped lang="scss">


</style>
