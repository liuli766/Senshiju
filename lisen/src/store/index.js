/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meauid: 0, //建房百科菜单选中,
    hedeid:document.cookie,//导航选中
    link:'',
    token: '',
    isLogin: localStorage.getItem('islogin'), //登录状态
    // username:localStorage.getItem('username'), //当前用户账号
  },
  getters: {
    loginData (state) {
      if(state.token) {
        return {
          token:state.token
        }
      }
      let token = localStorage.getItem('loginData')
      if(token) {
        return JSON.parse(token)
      }
      return {}
    },
    gettoken(state,getters) {
      const loginData = getters.loginData
      console.log(loginData,1111)
      return loginData.token
      
    }
  },

  mutations: {
    settoken(state, data) { //vuex存放toke
      state.token = data
      localStorage.setItem("loginData", JSON.stringify(data))
    },
    cleartoken(state) { // 清除token
      state.token = ""
      localStorage.removeItem('loginData');
    },
    getUser(state, username) { //获取用户信息
      state.username = username
    },
    getislogin(state, status) { // 获取登录状态
      state.islogin = status
    },
    meauidfn(state, num) {//建房百科菜单选中
      state.meauid = num
    },
    headnav(state, num) {
      state.hedeid = num
    }
  }
})
