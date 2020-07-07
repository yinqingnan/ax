import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    // redirect:'/home',
    // component: Home
    component: ()=> import('@/views/Home')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
