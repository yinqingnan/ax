import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  'amfe-flexible';
import './style/cleardefault.css'
import "./assets/fonts/iconfont.css"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
import Router from 'vue-router'

import axios from 'axios'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

Vue.prototype.$axios = axios

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
