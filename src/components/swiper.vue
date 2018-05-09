<template>
  <div id="swiper">
    <div id="container">
      <swiper :options="swiperOption" ref="mySwiper">
        <template v-for="item in imgArr">
          <swiper-slide class="swiper-slide games">
            <img class="img-fluid" v-bind:src="item.url" alt="">
            <h6 class="text-holder">{{item.title}}</h6>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from "vue-awesome-swiper";

  export default {
    props: {
      imgArr: {
        type: Array,
        default: []
      }
    },
    name: "carrousel",
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true
          },
          // simulateTouch: false,
          followFinger: true,
          loop: true,
          // prevButton: '.swiper-button-prev',
          // nextButton: '.swiper-button-next'
          on: {
            touchEnd: function (event) {
              //你的事件
              return {};
            }
          }
        },
        slideIndex: 1
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {},
    mounted: function () {
      console.log("this is current swiper instance object", this.swiper);
    }
  };
</script>

<style type="text/scss" lang="scss">
  #swiper {
    #container {
      width: 100%;
    }
    .swiper-slide {
      width: 500px;
      &:nth-child(odd) {
        background: #fff;
      }
      &:nth-child(even) {
        background: #fff;
      }
      p {
        color: #fff;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .text-holder {
    font-weight: 400;
  }
</style>
