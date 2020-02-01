/*
 * @Descripttion: 登录表单的验证
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-30 13:29:52
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-02-01 16:33:48
 */
import validator from 'validator'
import isEmpty from  'lodash/isEmpty'

const validateInput = (data)=>{
    let errors = {}
    if(validator.isEmpty(data.username)){
        errors.username = '请输入用户名'
    }
    if(validator.isEmpty(data.password)){
        errors.password = '请输入密码'
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}
export default validateInput

