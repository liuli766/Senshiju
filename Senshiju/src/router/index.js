import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 解决导航组件重复点击报错， 更改原型上的push方法，进行了catch处理
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['@/pages/home'], resolve)
  },
  {
    path: '/buildingHouseLibrary',
    name: 'buildingHouseLibrary',
    meta: {
      title: '建房图库'
    },
    component: (resolve) => require(['@/pages/buildingHouseLibrary'], resolve)
  },
  {
    path: '/DesignTteam',
    name: 'DesignTteam',
    meta: {
      title: '设计团队'
    },
    component: (resolve) => require(['@/pages/DesignTteam'], resolve)
  },
  {
    path: '/PersonalTtailor',
    name: 'PersonalTtailor',
    meta: {
      title: '私人订制'
    },
    component: (resolve) => require(['@/pages/PersonalTtailor'], resolve)
  },
  {
    path: '/BuildingLog',
    name: 'BuildingLog',
    meta: {
      title: '建房日志'
    },
    component: (resolve) => require(['@/pages/BuildingLog'], resolve)
  },
  {
    path: '/BuildingEncyclopedia',
    name: 'BuildingEncyclopedia',
    meta: {
      title: '建房百科'
    },
    component: (resolve) => require(['@/pages/BuildingEncyclopedia'], resolve)
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => { // 路由标题
  window.document.title = to.meta.title
  next()
})
router.afterEach(() => { // 打开任何页面都会显示顶部
  window.scrollTo(0, 0)
})
export default router
