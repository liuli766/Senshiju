import axios from './http'
import base from './base'

// /**
//  * post方法，对应post请求
//  * @desc注册请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function userRegister(data) {
//     return axios({
//         url: `${base.url}/users/register`,
//         method: 'post',
//         data: qs.stringify(data)
//     })
// }

// /**
//  * get方法，对应get请求
//  * @desc登录请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */

// export function userInfo() {
//     return axios({
//         url: `${base.url}/profile/all`,
//         method: 'get'
//     })
// }

export default {
    interface: {
        //会员专区
        getfollow: '/mobile/VipInfo/my_follow',//查看关注
        getfans: '/mobile/VipInfo/my_fans',//查看粉丝
    },
    getData: function(url, data, method) {
        if (this.interface[url]) {
            url = `${base.url}this.interface[url]`;
            let header = {
                "X-Requested-With": "XMLHttpRequest"
            }
            data = data ? data : {};
            let token = localStorage.eToken;
            if (!token) {
                return new Promise(function (resolve, reject) {
                    reject('用户未登录，无法请求该接口');
                })
            }
            data.uid = token.uid;
            data.userToken = token.userToken;
            return new Promise(function (resolve, reject) {
                axios({
                    url,
                    data,
                    header,
                    method: method ? method : 'POST',
                    success: (res) => {
                        if (res.data.status == 200) {
                            resolve(res.data, res);
                        }
                        if (res.data.status == 401) {
                            alert('请先登录！');
                            setTimeout(function () {
                                // uni.reLaunch({
                                //     url: "/pages/login/login"
                                // })
                            }, 3000);
                        }
                        if (res.data.status == 400 || res.data.status == 404) {
                            alert(res.data.msg);
                        }
    
                    },
                    fail: (error) => {
                        reject(error);
                    },
                    complete: () => {
    
                    }
                });
            })
        } else {
            return new Promise(function (resolve, reject) {
                reject('接口错误');
            })
        }
    }
}
