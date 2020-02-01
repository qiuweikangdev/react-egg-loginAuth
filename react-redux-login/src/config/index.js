/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-21 12:07:43
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-29 20:23:52
 */
//baseUrL请求的基础路径
//NODE_ENV是用户一个自定义的变量
//process.env属性返回包含用户环境的对象
export const baseURL = process.env.NODE_ENV === 'production' ?
    '' //部署在一个域名的根路径  生产环境 （上线）
    :
    // 'http://172.16.29.251:3001/' //本地开发环境
    // 'http://0.0.0.0:3001/' //本地开发环境
    'http://localhost:3001/' //本地开发环境