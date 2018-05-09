// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
import './style/bootstrap.css'
import './style/iconfont'

Vue.prototype.$xiaoneng = () => {
  interactive.init("xiaoneng");
  var elm = document.querySelectorAll(".xiaoneng");
  for (let i = 0; i < elm.length; i++) {
    elm[i].addEventListener("click", function (e) {
      interactive.openNtkf(e, ""); //第二个参数代表元素绑定的发起内容，发起小能时页面框架会上传该内容，默认为空，项目可以自定义10个字以内的字符串
    });

    function callback() {
      alert("信息提交成功");
    }
  }
}


Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
