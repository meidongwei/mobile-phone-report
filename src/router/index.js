import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Layout from '@/pages/layout'
import Achievements from '@/pages/achievements'

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
      redirect: '/layout/achievements',
      children: [
        {
          path: 'achievements',
          name: 'achievements',
          component: Achievements
        }
      ]
    }
  ]
})
