/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-19 20:43:10
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-30 13:05:52
 */


import { USER_INFO,SET_TOKEN} from './actionTypes'
import { login } from '@/api/user'
export const setToken = (token)=>({
    type:SET_TOKEN,
    token
})

export const userInfo = (data)=>({
    type:USER_INFO,
    data
}) 


// export const loginAction =(data)=>{
//     return async (dispatch)=>{
//         try{
//             let result =  await login(data.username,data.password)
//             const action = userInfo(result.data.userInfo)
//             dispatch(action)
//         }catch(e){
//             console.log(e)
//         }
         
//     }
// }