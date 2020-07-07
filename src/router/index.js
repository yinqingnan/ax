import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    // name: 'home',
    redirect:'/index/appendix',
    // component: Home
    component: ()=> import('../views/Home/Home.vue')
  },
    {
      path: '/index',
      name: 'home',
      // component: Home
      component: ()=> import('../views/Home/Home.vue'),
      children :[
        {path:'/index/appendix',name:'Appendix',component:()=> import('../views/Home/children/appendix.vue')}
      ]
    },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
