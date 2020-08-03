import http from '@/http.js' 
// 获取轮播数据
function getLunbo(data){
    let params = {
        ...data
      }
    return http.fetchPost('api/Index/selectLunbo',params)
}
function getCode(data){
    let params = {
        ...data
      }
      return http.fetchPost('api/Common/sendMsg',params)
}
function getRegister(data){
    let params = {
        ...data
      }
      return http.fetchPost('/index/Login/login',params)
}
function getQrcode(){
      return http.fetchPost('/index/Login/qr_code')
}
function getBlueDetail(data){
    let params = {
        ...data
      }
    return http.fetchPost('/index/Home/blue_detail',params)
}
function getSubapply(data){
    let params = {
        ...data
      }
    return http.fetchPost('/index/Team/subapply',params)
}
function getHomeindex(data){
    let params = {
        ...data
      }
    return http.fetchPost('/Home/index',params)
}
function getHomebaike(data){
    let params = {
        ...data
      }
    return http.fetchPost('/Home/infomartion',params)
}
function getHots(data){
    let params = {
        ...data
      }
    return http.fetchPost('/index/Home/hots',params)
}
function getPresell(data){
    let params = {
        ...data
      }
    return http.fetchPost('index/Home/presell',params)
}
function getCates(data){
    let params = {
        ...data
      }
    return http.fetchPost('api/Common/cates',params)
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
    getHots, //首页热门图纸 
    getPresell, //pc网站首页-图纸预售
    getCates, //分类
  }