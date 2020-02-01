/*
 * @Descripttion: reducer的入口文件
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-25 20:34:51
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-31 23:23:06
 */
import { combineReducers } from 'redux'
import user from './user'
import flashMessage from './flashMessage'
//合并多个reducer函数
const rootReducer = combineReducers({
    user,
    flashMessage
})
export default rootReducer