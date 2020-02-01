/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-25 16:15:47
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 16:33:20
 */
import React from 'react';
import Routes from '@/router'
import store from './store/index'
import { Provider } from 'react-redux'
function App() {
   return (
     // Provider提供组件里边的其它所有组件都可以使用store
  <Provider store ={store}>
         <Routes/>
   </Provider>
   )
}
export default App;
