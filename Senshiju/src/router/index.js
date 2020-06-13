import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/Home/Detail',
    name: 'Detail',
    meta: {
      title: '登录注册'
    },
    component: (resolve) => require(['@/pages/detail'], resolve)
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach(() => { // 打开任何页面都会显示顶部
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => { // 路由标题
  window.document.title = to.meta.title
  next()
})
export default router
