import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Layout from '@/pages/layout'
import Jixiao from '@/pages/jixiao'
import Baobiao from '@/pages/baobiao'
import Yonghu from '@/pages/yonghu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: '/layout/jixiao',
      children: [
        {
          path: 'jixiao',
          name: 'jixiao',
          component: Jixiao
        },
        {
          path: 'baobiao',
          name: 'baobiao',
          component: Baobiao
        },
        {
          path: 'yonghu',
          name: 'yonghu',
          component: Yonghu
        }
      ]
    }
  ]
})
