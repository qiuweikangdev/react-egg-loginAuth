/*
 * @Descripttion: 消息提示
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-31 23:04:19
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 09:04:58
 */
import { SET_ALERT, CLEAR_ALERT } from '../actionTypes';

const initialState = {
   type:'',
   text:''
};

export default function(state = initialState, action) {
  const { type, message } = action;
  switch (type) {
    case SET_ALERT:
      return Object.assign({},state,{type:action.message.type,text:action.message.text})
    case CLEAR_ALERT:
      return Object.assign({},state,{type:action.message.type,text:action.message.text})
    default:
      return state;
  }
}
