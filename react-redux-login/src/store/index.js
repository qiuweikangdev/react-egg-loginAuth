/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-25 20:24:03
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-30 19:46:55
 */
import {createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store;