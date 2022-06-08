import UserNameStyle from './userName.module.css'
import React from 'react'
const UserName=(props)=>{
    return(
      <div className={UserNameStyle.UserName}>
   {props.frstName} {props.scndName}</div>
    )
}

export default UserName