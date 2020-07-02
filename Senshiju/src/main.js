// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/comm/reset.css'
import './assets/comm/comm.css'
import './assets/comm/iconfont.css'
import './assets/comm/animate.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
import axios from 'axios'
Vue.prototype.$axios=axios
// Vue.prototype.api = api;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
