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
      component: ()=> import('../views/Home/Home.vue'),
      children :[
        {path:'/index/appendix',name:'Appendix',component:()=> import('../views/Home/children/appendix.vue')},
        {path:'/index/group',name:'group',component:()=> import('../views/Home/children/group.vue'),
        redirect:'/index/group/introduction',
        children:[
          {path:'/index/group/introduction',name:'Introduction',component:()=> import('../components/Enterprise/Introduction.vue')},
          {path:'/index/group/chairman',name:'Chairman',component:()=> import('../components/Enterprise/Chairman.vue')},
          {path:'/index/group/course',name:'course',component:()=> import('../components/Enterprise/course.vue')},
          {path:'/index/group/enterprisehonor',name:'Enterprisehonor',component:()=> import('../components/Enterprise/Enterprisehonor.vue')},
          {path:'/index/group/companyculture',name:'companyculture',component:()=> import('../components/Enterprise/companyculture.vue')},
          {path:'/index/group/building',name:'building',component:()=> import('../components/Enterprise/Building.vue')},
          ]
        }

      ]
    },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
