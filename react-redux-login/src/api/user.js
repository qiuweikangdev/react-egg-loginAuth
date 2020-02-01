/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-21 12:09:21
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 10:05:48
 */
import axios from './index'
export const login = (username,password) =>{
    return axios.request({
        url:'user/login',
        method:'post',
        data:{
            username,password
        }

    })
}
export const register = (username,password) =>{
    return axios.request({
        url:'user/register',
        method:'post',
        data:{
            username,password
        }

    })
}
//判断token是否有效
//后端判断请求头有无 token，没有或者 token 过期，返回401；
export const authorization = () => {
    return axios.request({
        url: '/user/authorization',
        method: 'get',
    })
}