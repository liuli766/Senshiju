import axios from 'axios';
import qs from 'qs';
// axios配置
axios.defaults.timeout=5000;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL='http://locahost:8080';

// 拦截器
axios.interceptors.request.use(function (config) {
   if(config.method==='get'){
       config.data=JSON.stringify(config.data)
   }
   if(config.method==='post'){
       config.data=qs.stringify(config.data)
   }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(function (res) {
    if(!res.data.success){
        Message.error(res.data.message)
        return Promise.reject(res)
    }
    return res;
}, function (error) {
    const { status } = error.response
    if (status === 401) {
        Message.error('请重新登录')
        //清楚token
        localStorage.removeItem('eToken')
        //跳转到登录页面
        router.push('/login')
    }
    return Promise.reject(error);
});

// 公共方法
export function get(api,data){
    return new Promise((resolve,reject)=>{
        axios.get(api,{params:data})
        .then(res=>{
            resolve(res.data)
        },err=>{
            reject(err.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function post(api,params){
    return new Promise((resolve,reject)=>{
        params=JSON.stringify(params)
        axios.post(api,params)
        .then(res=>{
            resolve(res.data)
        },err=>{
            reject(err.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

// 业务方法
export default{
    getregister(){
        return post('./address',{addressId:1})
    }
}
