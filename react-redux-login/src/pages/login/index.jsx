import React,{ useState, useCallback,useEffect} from 'react'
import { Link } from 'react-router-dom'
import FormInput from '@/components/formInput'
import { bindActionCreators } from 'redux'
import * as userAction from '@/store/actions/userAction'
import * as messageAction from  '@/store/actions/flashMessage'
import { connect } from 'react-redux'
import  validateInput  from '@/utils/validate/validateInput'
const Login =(props)=>{
    const [username,setUsername]  = useState('')
    const [password,setPassword]  = useState('')
    const [error,setError]  = useState({})
    const [loading,setLoading]  = useState(false)  //用来防止重复提交请求
    const { userAction ,messageAction} = props
    const handleSubmit = (event)=>{
        event.preventDefault() //阻止默认表单行为
        isValid() && loginUser()
    }
    const isValid = ()=>{
     
        const { errors,isValid }  = validateInput({username,password})
        if(!isValid){
            setError(errors)
        }
        return isValid
        
    }
    const loginUser = async ()=>{
         setError('')
         setLoading(true)
         await userAction.loginRequest({username,password}).then(
             ()=>{
                // alert('登录成功')
                messageAction.setAlert({
                    type:'success',
                    text:'登录成功'
                })
                props.history.push('/');
             },

             //密码或用户名不存在会出现错误,后台设置了状态码响应
             (err)=>{
                 console.log(err.response)
                 setError({msg:err.response.data.message})
                 setLoading(false)
            })
            .catch(e=>{
                setError({msg:"出了问题,请再试试"})
                setLoading(false)
            })
        //  try{
        //   let result =  await loginAction.loginRequest({username,password})
        //     if(result.data.message === '用户名不存在' || result.data.message === '密码错误'){
        //         setError({msg:'用户名不存在/密码错误'})
        //         setLoading(false)
        //     }else{
        //         alert('登录成功')
        //         props.history.push('/');
        //     }
            
        // }catch(e){
        //     console.log(e)
        //     setError({msg:"出了问题,请再试试"})
        //     setLoading(false)
        //  }
        
    }
    const handleChange = (type,e)=>{
        setError('')
        switch(type){
            case 'user':
            return (
                setUsername(e.target.value)
            )
            case 'password':
            return (
                setPassword(e.target.value)
            )
            default: return null
        }
    }
    return (
        <div>
            <p> this is login page</p>
            <button onClick={()=>{props.history.goBack()}}>返回</button>
            <form  onSubmit={handleSubmit}>
             <FormInput onChange={(e)=>{handleChange('user',e)}} value={username}  error={error.username}   type='text'/>
             <FormInput onChange={(e)=>{handleChange('password',e)}} value={password}  error={error.password} type='password'/>
             <FormInput type='submit' value='Login' isLoading={loading}/>
                <span style={{color:'red'}} >{error.msg}</span>
                <span  ><Link to='/register'>还没账号?去注册</Link></span>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        userAction:bindActionCreators(userAction,dispatch),
        messageAction:bindActionCreators(messageAction,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Login);