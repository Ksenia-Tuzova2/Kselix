import ProfileStyle from './profile.module.css'
import React from 'react'
import Posts from './posts/posts'
import UserPhoto from './userInfo/userPhoto/userPhoto'
import UserInfoList, { UserInfo } from './userInfo/userInfo-list'
import UserStatus from './userInfo/userStatus/userStatus'
import UserName from './userInfo/userName/userName'


export const Profile=(props)=>{
    return(
     <div >
         <UserInfo/>
         <Posts/>
    </div>
    )
}

