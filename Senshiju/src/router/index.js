import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 解决导航组件重复点击报错， 更改原型上的push方法，进行了catch处理
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: (resolve) => require(['@/pages/home'], resolve)
  },
  {
    path: '/register',
    name: '注册',
    meta: {
      title: '注册'
    },
    component: (resolve) => require(['@/components/register'], resolve)
  },
  {
    path: '/login',
    name: '登录',
    meta: {
      title: '登录页'
    },
    component: (resolve) => require(['@/components/login'], resolve)
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
    path: '/BuildingEncyclopedia',
    name: 'BuildingEncyclopedia',
    meta: {
      title: '建房百科'
    },
    component: (resolve) => require(['@/pages/BuildingEncyclopedia'], resolve)
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索'
    },
    component: (resolve) => require(['@/pages/search'], resolve)
  },
  {
    path: '/teamDetail',
    name: 'teamDetail',
    meta: {
      title: '设计详情'
    },
    component: (resolve) => require(['@/pages/teamdetail'], resolve)
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    meta: {
      title: '建房图库详情'
    },
    component: (resolve) => require(['@/pages/productDetail'], resolve)
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单列表'
    },
    //  requireAuth: true,// 判断是否需要登录
    component: (resolve) => require(['@/pages/order'], resolve)
  },
  {
    path: '/articDetail',
    name: 'articDetail',
    meta: {
      title: '文章详情'
    },
    component: (resolve) => require(['@/pages/articDetail'], resolve)
  },
  {
    path: '/quikOrder',
    name: 'quikOrder',
    meta: {
      title: '快速订购'
    },
    component: (resolve) => require(['@/pages/quikOrder'], resolve)
  },
  {
    path: '/pay',
    name: 'pay',
    meta: {
      title: '支付页面'
    },
    component: (resolve) => require(['@/pages/pay'], resolve)
  },
  {
    path: '/orderpay',
    name: 'orderpay',
    meta: {
      title: '在线快速订购'
    },
    component: (resolve) => require(['@/pages/orderpay'], resolve)
  },
  {
    path: '/orderzfb',
    name: 'orderzfb',
    meta: {
      title: '支付宝支付'
    },
    component: (resolve) => require(['@/pages/orderzfb'], resolve)
  },
  {
    path: '/paysucess',
    name: 'paysucess',
    meta: {
      title: '支付成功',
    },
    component: (resolve) => require(['@/pages/paysucess'], resolve)
  },
  {
    path: '/Display',
    name: 'Display',
    meta: {
      title: '建房百科专题',
    },
    component: (resolve) => require(['@/pages/Display'], resolve)
  }
]

const router = new Router({
  // mode: 'history',
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
