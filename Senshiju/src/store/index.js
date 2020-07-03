/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meauid:0, //建房百科菜单
  },
  getters: {

  },
  
  mutations: {
    meauidfn(state,num){
      state.meauid=num
    }
  }
})
