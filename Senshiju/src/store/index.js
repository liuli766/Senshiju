/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meauid: 0, //建房百科菜单选中,
    hedeid: sessionStorage.getItem('idnum'),//导航选中 
    token: localStorage.getItem('istoken'),
    userInfor: JSON.parse(localStorage.getItem('loginData')), //当前账号信息
    isLogin: localStorage.getItem('islogin'), //登录状态
    user: {

    },
    headimg: localStorage.getItem('headImg'),
    serchlist: [], //搜索内容
    serverqq: '',
    isfooter:true
  },
  getters: {
    loginData(state) {
      if (state.token) {
        return {
          token: state.token
        }
      }
      let token = localStorage.getItem('loginData')
      if (token) {
        return JSON.parse(token)
      }
      return {}
    },
    gettoken(state, getters) {
      const loginData = getters.loginData
      console.log(loginData, 1111)
      return loginData.token

    }
  },

  mutations: {
    settoken(state, data) { //vuex存放toke
      state.token = data.token
      state.userInfor = data
      localStorage.setItem("loginData", JSON.stringify(data))
      state.headimg = data.photo
      console.log(state.headimg,data.photo)
    },
    cleartoken(state) { // 清除token
      state.token = ""
      state.userInfor = {}
      localStorage.removeItem('loginData');
      localStorage.removeItem('istoken');
    },
    getUser(state, user) { //获取用户信息
      state.user = user
    },
    getislogin(state, status) { // 获取登录状态
      state.islogin = status
      console.log(state.islogin)
    },
    meauidfn(state, num) {//建房百科菜单选中
      state.meauid = num
    },
    changNav(state,val){
      state.isfooter=val
    },
    headnav(state, num) { //导航状态
      state.hedeid = num
    },
    Serch(state, data) {
      state.serchlist = data
    },
    uploadimg(state, img) {
      state.userInfor.photo = img
      state.headimg = img
    },
    serQQ(state, data) {
      state.serverqq = data
    }
  },

})
