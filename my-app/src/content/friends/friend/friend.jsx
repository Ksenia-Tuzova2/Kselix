import FriendStyle from './friend.module.css'
import React from 'react'

const Friend=(props)=>{
    return(
    <div className={FriendStyle.Friend}>
        <div className={FriendStyle.Friend__Avatar}><a href=''><img src="" alt="" /></a></div>
        <div className={FriendStyle.Friend__InfoWrapper}>
            <div className={FriendStyle.Friend__Name}>{props.friendName}</div>
            <div className={FriendStyle.Friend__Status}>{props.friendStatus}</div>
            <button className={FriendStyle.Friend__Massage_Btn}>Massage</button>
        </div>
   </div>

       
    
    )
}

export default Friend