import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/index'

Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import(/* webpackChunkName: "person" */ '../views/person')
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: () => import(/* webpackChunkName: "payroll" */ '../views/payroll')
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login')
    },
    {
      path: '',
      component: App,
      children: appRoutes
    }
  ]
})
