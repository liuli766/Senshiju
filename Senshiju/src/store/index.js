/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meauid:0, //建房百科菜单选中,
    hedeid:localStorage.idnum,//导航选中
  },
  getters: {

  },
  
  mutations: {
    meauidfn(state,num){//建房百科菜单选中
      state.meauid=num
    },
    headnav(state,num){
      state.hedeid=num
    }
  }
})
