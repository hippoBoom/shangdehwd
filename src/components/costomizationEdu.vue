<template>
  <div class="init-box">
    <h1 class="box-title"> 学历人的“无微不至”，在线定制属于你的学历方案 </h1>
    <ul class="sel-holder">
      <li>
        <h6>您目前的学历基础</h6>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio1" value="option1">
          <label class="form-check-label" for="inlineRadio1">低基础</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio2" value="option2">
          <label class="form-check-label" for="inlineRadio2">初/高中毕业</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio3" value="option3">
          <label class="form-check-label" for="inlineRadio2">中专/大专毕业</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="eduBasic" id="inlineRadio4" value="option4">
          <label class="form-check-label" for="inlineRadio2">其他</label>
        </div>
      </li>
      <li>
        <h6>您想提升的学历</h6>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="upEdu" value="option1">
          <label class="form-check-label" for="inlineRadio1">高升本</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="upEdu" value="option2">
          <label class="form-check-label" for="inlineRadio2">专升本</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="upEdu" value="option3">
          <label class="form-check-label" for="inlineRadio2">专本连续</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="upEdu" value="option4">
          <label class="form-check-label" for="inlineRadio2">其他</label>
        </div>
      </li>
      <li>
        <h6>尚德老师给您推荐</h6>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
          <label class="form-check-label" for="recommendEdu">推荐学校</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2">
          <label class="form-check-label" for="recommendEdu">推荐专业</label>
        </div>
      </li>
      <li>
        <h6 class="notice">（说明情况以及需求1分钟量身定制合适你的院校以及专业）</h6>
      </li>
      <li>
        <button type="button" class="btn btn-lg btn-block xiaoneng">专业老师在线定制</button>
      </li>
    </ul>
    <statuspart></statuspart>
  </div>
</template>

<script>
  import statuspart from "./statusPart";

  export default {
    name: "costomization-edu",
    components: {
      statuspart
    },
    mounted() {
      this.$xiaoneng();
    }
  };
</script>

<style scoped lang="scss">
  .init-box {
    padding-top: 10px;
  }

  .sel-holder {
    li {
      padding: 5px;
      h6 {
        font-size: 0.9rem;
        font-weight: 400;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #bbb;
      }
      &:last-child button {
        background: #d53c3e;
        color: #ffffff;
      }
      div {
        label {
          font-size: 0.7rem;
        }
      }
    }
  }

  .notice {
    color: #D53C3E;
  }
</style>
