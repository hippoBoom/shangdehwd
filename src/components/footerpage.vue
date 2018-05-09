<template>
  <div class="footer">
    <ul class="row">
      <li class="col" v-for="(item,index) in footArr">
        <router-link :to="item.link">
          <p>
            <svg :class="`icon ${index==0?'active':''}`" aria-hidden="true">
              <use :xlink:href="item.url"></use>
            </svg>
          </p>
          <h6 :class="index==0?'active':''">{{item.title}}</h6>
        </router-link>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        footArr: [
          {
            url: '#icon-news',
            title: "资讯",
            link: '/news'
          },
          {
            url: '#icon-icon',
            title: "活动",
            link: '/activity'
          },
          {
            url: '#icon-sale',
            title: "福利",
            link: '/weal'
          }
        ]
      };
    }
  };
</script>

<style scoped lang="scss">
  .iconfont {
    font-size: 1rem;
  }

  .footer {
    max-width: 640px;
    width: 100%;
    /*line-height: 2.5rem;*/
    background: #e5e5e5;
    position: fixed;
    bottom: 0px;
    z-index: 999;
    .row {
      .col {
        text-align: center;
        padding-top: 5px;
        p {
          max-width: 25px;
          width: 100%;
          display: inline-block;
        }
        h6 {
          font-size: 0.8rem;
          font-weight: 400;
        }
      }
    }
  }

  .icon {
    font-size: 1.5rem;
  }

  .active {
    color: #D53C3E;
  }

</style>
