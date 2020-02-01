import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import classNames from 'classnames'
const FromInput =(props)=>{
    const { className, value, onChange, type, error,isLoading } = props
    return(
        <div className='FromInput'>
                <input className={classNames({'':error,'input-success':!error})}  type={type}  value={value} onChange={onChange} disabled={isLoading?'disabled':null} />
                {error?<div className="error-text">{error}</div>:null}
        </div>
    )
}

FromInput.propTypes = {
    className:PropTypes.string,
    type: PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    error: PropTypes.string,
    isLoading:PropTypes.bool
}
FromInput.defaultProps = {
    className:'',
    type:'text',
    value:'',
    onChange:()=>{},
    error:'',
    isLoading:false
}

export default FromInput;