import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  'amfe-flexible';
import './style/cleardefault.css'
import "./assets/fonts/iconfont.css"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';

import { Button } from 'vant';
import 'vant/lib/button/style';
Vue.use(Button)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
