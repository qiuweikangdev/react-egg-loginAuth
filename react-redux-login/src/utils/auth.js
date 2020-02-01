/*
 * @Descripttion:  验证token  
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-28 19:32:01
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-28 19:33:02
 */
import Cookie from 'js-cookie'   
//设置默认的tokanName，如果传入tokaName则会覆盖默认值
//设置token
export const setToken =(token,tokeName = 'token')=>{
    return Cookie.set(tokeName,token)
}
//获取token
export const getToken = (tokeName = 'token') =>{
    return Cookie.get(tokeName)
}
//删除token
export const removeToken =(tokeName = 'token')=>{
    return Cookie.remove(tokeName)
}
