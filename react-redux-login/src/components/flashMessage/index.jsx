import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
/* 
消息提示
成功or失败
*/
const FlashMessage = (props)=>{
    const { type,text }  = props.message
    // 可根据type类型来进行成功和失败消息提示的样式
    return (
        !isEmpty(text) && 
         <div className={classNames('alert')}>
             {alert(text)}
        </div>
    )
}
const mapStataToProps = (state)=>{
    return {
        message:state.flashMessage  
    }
}
export default connect(mapStataToProps)(FlashMessage)