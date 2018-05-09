<template>
  <div class="togglebox">
    <template v-for="(item,index) in getdata">
      <input :id="`toggle${index+1}`" type="radio" name="toggle" v-bind:checked="index==0?true:false"/>
      <label :for="`toggle${index+1}`">{{item.title}}</label>
      <section :id="`content${index+1}`">
        <p v-html="item.text"></p>
      </section>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      getdata: {
        type: Array,
        default: []
      }
    },

  }
</script>

<style scoped>
  .togglebox {
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  label {
    position: relative;
    display: block;
    height: 50px;
    line-height: 60px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 700;
    border-top: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
  }

  section {
    height: 0;
    transition: .4s all;
    overflow: hidden;
  }

  #toggle1:checked ~ #content1,
  #toggle2:checked ~ #content2,
  #toggle3:checked ~ #content3,
  #toggle4:checked ~ #content4,
  #toggle5:checked ~ #content5 {
    height: 100px;
    overflow: scroll;
  }

  p {
    margin: 15px 0;
    padding: 0 20px;
    font-size: 12px;
    line-height: 1.5;
  }
</style>
