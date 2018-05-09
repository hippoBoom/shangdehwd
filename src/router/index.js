import Vue from 'vue'
import Router from 'vue-router'
import news from '../pages/news'
import activity from '../pages/activity'
import weal from '../pages/weal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'news'
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/activity',
      component: activity
    },
    {
      path: '/weal',
      component: weal
    }
  ]
})
