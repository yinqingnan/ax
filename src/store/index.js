import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language:true
  },
  mutations: {
    switch(state){
      state.language = !state.language
    }
  },
  actions: {
  },
  modules: {
  }
})
