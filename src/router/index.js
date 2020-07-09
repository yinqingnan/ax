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
        //
        {path:'/index/appendix',name:'Appendix',component:()=> import('../views/Home/children/appendix.vue')},
        {path:'/index/news',name:'news',component:()=> import('../views/Home/children/news.vue')},
        {path:'/index/joinaixin',name:'joinaixin',component:()=> import('../views/Home/children/joinaixin.vue')},
        {path:'/index/contactus',name:'contactus',component:()=> import('../views/Home/children/contactus.vue')},
        {path:'/index/globallydistributed',name:'globallydistributed',component:()=> import('../views/Home/children/globallydistributed.vue')},

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
        },
        {path:'/index/industry',name:'industry',component:()=> import('../views/Home/children/industry.vue'),
        redirect:'/index/industry/healthy',
        children:[
          {path:'/index/industry/healthy',name:'healthy',component:()=> import('../components/industry/healthy.vue')},
          {path:'/index/industry/hotel',name:'hotel',component:()=> import('../components/industry/hotel.vue')},
          {path:'/index/industry/tourism',name:'tourism',component:()=> import('../components/industry/tourism.vue')},
          {path:'/index/industry/ecommerce',name:'ecommerce',component:()=> import('../components/industry/Ecommerce.vue')},
          {path:'/index/industry/investment',name:'investment',component:()=> import('../components/industry/investment.vue')},
          ]
        }

      ]
    },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) ;

export default router
