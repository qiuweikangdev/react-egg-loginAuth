/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-25 16:15:47
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 15:35:43
 */
import React,{Suspense,useEffect } from 'react';
import routes from './routes'
// import { renderRoutes } from "react-router-config";
import renderRoutes from '@/utils/renderRoutes'
import { HashRouter ,Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import AuthRoute from '@/router/AuthRoute'
import { authToken } from '@/store/actions/userAction'
import FlashMessage from '@/components/flashMessage'
// const authed = false // 如果登陆之后可以利用redux修改该值
const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置
function Router(props) {
   const { isAuthenticated:authed } = props.isAuth
   useEffect(()=>{
       //判断token是否过期
       if(authed){
            props.authToken()
       }
   },[authed])
   return(
      <HashRouter>
            <FlashMessage/>
            <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                  <AuthRoute isLogin={authed?true:false} routes={routes}>
                    {renderRoutes(routes, authed, authPath)}
                  </AuthRoute>
                  {/* { renderRoutes(routes) } */}
                
               </Switch>
            </Suspense>
       </HashRouter>
   )
}
const mapStateToProps = (state)=>{
   return {
      isAuth:state.user
   }
}
export default connect(mapStateToProps,{ authToken })(Router);
