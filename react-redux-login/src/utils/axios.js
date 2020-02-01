/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-21 11:30:21
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-30 16:43:38
 */
import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/utils/auth'
// import { startLoading ,endLoading } from './Loading'
axios.defaults.withCredentials = true; //允许请求头携带cookie
class HttpRequest {
    //baseURL请求的基础路径
    //当没有传入baseUrl参数时，则使用默认的baseURL
    constructor(baseUrl = baseURL){
    // this是我们创建的实例
        this.baseUrl = baseUrl
    }
    getInsideConfig(){
        const config = {
            baseURL:this.baseUrl,
            headers:{ },
        }
        return config
    }
    //请求和响应拦截
    interceptors(instance,url){
         //请求拦截
         //在发送请求之前做些什么
         //可让每个请求携带token
        instance.interceptors.request.use(config=>{
            //config : 请求的所有配置 
             //让每个请求携带令牌token
            // if (store.getters.token) {
            // ['X-Token']是一个自己自定义头键
            //  config.headers['X-Token'] = getToken()
        //   }

         // 每次发送请求之前判断store中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
         config.headers['authorization'] ='Bearer '+ getToken()
            
            return config
        },error=>{
            return Promise.reject(error)
        })
        //响应拦截
        //成功请求
        instance.interceptors.response.use(res=>{
            //res ：响应的信息
            //对响应的结果进行处理
           //拿到响应结果的data数据和status状态码
           const { data,status} = res 
            // return data

            return res
        },error=>{
            return Promise.reject(error)
        })
    }
    request(options){
        const instance = axios.create()
    // 把两个对象合并一个对象
        options = Object.assign(this.getInsideConfig(),options)
        this.interceptors(instance,options.url)
        return instance(options)
    }
}
export default HttpRequest