import React from 'react'
import { Link  } from 'react-router-dom'
const Shop =(props)=>{
    const goBack = ()=>{
        props.history.goBack()
    }
     return (
         <div>
             this is shop page
             <button onClick={ goBack }>返回</button>
         </div>
     )
}
export default Shop
