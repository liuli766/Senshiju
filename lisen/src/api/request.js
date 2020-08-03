import axios from 'axios'


// 创建axios实例
const service = axios.create({
  timeout: 10000, // 请求超时时间,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
// request拦截器
service.interceptors.request.use(async config => {

  if (config.method === 'post') {

  } else {
    config.params = {
      ...config.params
    }
  }
  return config
}, error => {
  console.error(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * resultCode为非ok是抛错 可结合自己业务进行修改
     */
    let res = response.data
    if (res.resultCode == 'ok') {

      console.group(response.config.url)
      console.log(JSON.parse(JSON.stringify(res)))// 这样取消vue的setter 和 getter 使打印更干净
      console.groupEnd()

      if (Object.prototype.toString.call(res.data) !== '[object Object]') {
        console.warn('接口未按文档规定返回 得到data类型为' + Object.prototype.toString.call(res.data) + ' 文档规定为Object')
      }
      return res
    } else {
      console.warn(res)
      return Promise.reject(res)
    }
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default service
