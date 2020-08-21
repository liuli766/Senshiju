import http from '@/http.js'
// 获取轮播数据
function getLunbo(data) {
  let params = {
    ...data
  }
  return http.fetchPost('api/Index/selectLunbo', params)
}
function getCode(data) {
  let params = {
    ...data
  }
  return http.fetchPost('api/Common/sendMsg', params)
}
function getRegister(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Login/login', params)
}
function getQrcode() {
  return http.fetchPost('/index/Login/qr_code')
}
function getBlueDetail(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/blue_detail', params)
}
function getSubapply(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Team/subapply', params)
}
function getHomeindex(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/index', params)
}
function getHomebaike(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/infomartion', params)
}
function getHots(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/hots', params)
}
function getPresell(data) {
  let params = {
    ...data
  }
  return http.fetchPost('index/Home/presell', params)
}
function getCates(data) {
  let params = {
    ...data
  }
  return http.fetchPost('api/Common/cates', params)
}

function getDrawings() {
  return http.fetchPost('/index/Team/private_imgs')
}

function getDesign(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Team/design_detail', params)
}

function getInfo(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/info_detail', params)
}

function getCollect(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Common/collect', params)
}

function getHomrdesign(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/design', params)
}
function getPrivate(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/private_imgs', params)
}
function getLabels(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Home/labels', params)
}
function getOrders(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/my_orders', params)
}
function getCancelcollect(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/cancel_collect', params)
}

function fachcollect(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/sel_collect', params)
}
function getSetRes(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/set_ress', params)
}

function getDelRes(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/del_ress', params)
}

function getAddRes(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/add_ress', params)
}

function getupRes(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/upd_ress', params)
}

function getupInfo(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/upd_info', params)
}
function getaddress(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/address', params)
}
function teamDrawings(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Team/pri_drawings', params)
}
function teamIndex(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Team/index', params)
}
function blueApply(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/blue_apply', params)
}
function buyBlue(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/buy_blue', params)
}
function getPlies() {
  return http.fetchPost('/index/Home/plies')
}
function getPay(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/pre_pay', params)
}
function getwxnotify(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/Notify/wx_notify', params)
}
function getartzx(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/api/Common/art_class', params)
}
function getupload(data) {
  let params = {
    ...data
  }
  return http.fetchPost('/index/User/up_image', params)
}
export default {
  getLunbo,  // 首页轮播数据
  getCode, //发送短信获取验证码
  getRegister, //验证码注册登录
  getQrcode, //微信二维码
  getBlueDetail, //图纸详情   
  getSubapply, //私人定制申请     
  getHomeindex, // pc网站首页 
  getHomebaike, //首页百科   
  getHots, //首页热门图纸  可以购买
  getPresell, //pc网站首页-图纸预售
  getCates, //分类
  getDrawings, //定制图纸
  getDesign, //设计师详情
  getInfo, //百科详情
  getCollect,//收藏
  getHomrdesign, //首页设计师
  getPrivate, //私人定制图片 营业执照、口碑
  getLabels,// 热门标签
  getOrders, //订单
  getCancelcollect, //取消收藏
  fachcollect, //图纸收藏/文章收藏
  getSetRes, //设为默认地址
  getDelRes, //删除收货地址
  getAddRes, //添加收货地址
  getupRes, //修改收货地址
  getupInfo, //修改个人资料
  getaddress, //收货地址
  teamDrawings, //定制图纸
  teamIndex, //设计师团队
  blueApply, //图纸申请
  buyBlue, //购买图纸
  getPlies, //私人订制层次
  getPay,//支付页面
  getwxnotify,//微信支付回调
  getartzx, //首页咨询
  getupload, //上传图片
}