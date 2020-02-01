/*
 * @Descripttion: 路由路径
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-26 14:09:06
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 09:46:35
 */
import React from 'react'
/* 
requiresAuth:true 表示要登录才能访问
*/
const routes = [
    { path: "/", exact: true,component:React.lazy(()=>import('@/pages/home'))},
    { path: "/login", exact: true,component:React.lazy(()=>import('@/pages/login'))},
    { path: "/register", exact: true,component:React.lazy(()=>import('@/pages/register'))},
    { path: "/shop",requiresAuth: true,exact: true,component:React.lazy(()=>import('@/pages/shop'))},
    { path: "*",component:React.lazy(()=>import('@/pages/notFound'))},
];
export default routes;

