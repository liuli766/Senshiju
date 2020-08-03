/**
 * 配置不同环境接口前缀
 * 如果未配置dev为默认配置
 * @param {*} base
 * @example
 * {
 *   dev: 'dev环境配置信息',
 *   sit: 'sit环境配置信息',
 *   prod: '线上环境配置信息'
 * }
 */
export const conf = function (base = {}) {
  if (process.env.NODE_ENV === 'production') { // 生产环境下
    var env = process.env.VUE_APP_SERVER_ENV || 'dev'
    return base[env] || base['dev']

  } else {
    // 开发环境
    return base['dev']

  }
}

export const BASE_API = conf({
  // 示例 : http://wx.zhizhuchuxing.com/zzcx/home/home/home-list
  dev: 'http://wx.zhizhuchuxing.com',
  test: 'http://wx.zhizhuchuxing.com',  // 测试环境
  prod: 'http://wx.zhizhuchuxing.com',  // 生产环境
})