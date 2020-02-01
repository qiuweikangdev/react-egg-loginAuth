/*
 * @Descripttion: 路由权限判断
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-31 10:28:56
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 15:48:51
 */
import React,{ useEffect,useCallback } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAlert }  from  '@/store/actions/flashMessage'
const AuthRoute =(props)=>{
    const { isLogin,location,history,routes }  = props
    useEffect(()=>{
        alertAuth(routes)
        if ( isLogin && location.pathname === '/login') {
              history.push('/')
         }
    })
    const alertAuth = (routes)=>{
        routes.map((item)=>{
            if(!isLogin && location.pathname === item.path && item.requiresAuth){
                props.setAlert({
                    type:'fail',
                    text:'请登录'
                })
            }
        })
    } 
        return props.children
}

export default withRouter(connect(null,{ setAlert })(AuthRoute))