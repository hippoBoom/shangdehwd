<template>
  <div class="init-box">
    <h1 :class="`box-title ${xiaoneng}`">{{propObj.title}}</h1>
    <img v-bind:src="propObj.url" alt="">
    <statusPart></statusPart>
  </div>
</template>

<script>
  import statusPart from "./statusPart";

  export default {
    props: {
      propObj: {
        type: Object,
        default: {
          title: "",
          url: "",
          xiaoneng: true
        }
      }
    },
    name: "advertising",
    components: {
      statusPart
    },
    computed: {
      xiaoneng() {
        return this.propObj.xiaoneng ? 'xiaoneng' : ''
      }
    },
    mounted() {
      this.$xiaoneng();
    }
  };
</script>

<style scoped lang="scss">
  .box {
    background: #fff;
    h1 {
      padding: 10px 4%;
    }
  }
</style>
