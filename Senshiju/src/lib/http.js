import axios from 'axios';

// 于处理axios中对请求拦截和响应拦截做处理，token处理
axios.create({
    timeout: 5000,
    withCredentials: true
})
let loading //定义加载动画

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中....',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {
    loading.close()
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    startLoading()
    //设置请求头
    if (localStorage.eToken) {
        confing.headers.Authorization = localStorage.eToken
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    endLoading()
    return response;
}, function (error) {
    // 对响应错误做点什么
    endLoading()
    // 获取状态码
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

export default axios