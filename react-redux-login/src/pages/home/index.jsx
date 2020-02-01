import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '@/store/actions/userAction'
import './index.scss'

const Home =(props)=>{
    const { isAuthenticated } = props.isAuth
    const logout = (e)=>{
        e.preventDefault()
        props.logout()
    }
    const GoLoginAndRegister = ()=>{
        return (
            <div className='login-and-register'>
               <span><Link to='/login'>登录</Link></span> 
               <span><Link to='/register'>注册</Link></span>
              
            </div>
        )
    }
    
    const Logout = ()=>{
        return (
            <div>
                <button onClick={logout}>退出登录</button>
            </div>
        )
    }
    return (
        <div className='Home'>
            this is home page
            <span className='shop'><Link to='/shop'>商城</Link></span>
            {isAuthenticated?<Logout/>:<GoLoginAndRegister/>}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        isAuth:state.user
    }
}
export default connect(mapStateToProps,{ logout })(Home);