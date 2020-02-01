/*
 * @Descripttion: 消息提示
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-31 22:59:07
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 14:13:58
 */
import { SET_ALERT, CLEAR_ALERT } from '../actionTypes';


export const setAlert = (message)=>({
     type:SET_ALERT,
     message:message
})

export const clearAlert = ()=>({
    type:CLEAR_ALERT,
    message:{}
})
