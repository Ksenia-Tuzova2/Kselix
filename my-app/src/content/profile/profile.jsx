import ProfileStyle from './profile.module.css'
import React from 'react'
import Posts from './posts/posts'
import UserPhoto from './userInfo/userPhoto/userPhoto'
import UserInfoList from './userInfo/userInfo-list'
import UserStatus from './userInfo/userStatus/userStatus'
import UserName from './userInfo/userName/userName'


export const Profile=(props)=>{
    return(
        <div className={ProfileStyle.ProfileWrapper}>
         <div className={ProfileStyle.Profile}>
           <UserPhoto/>
              <div className={ProfileStyle.Profile__userInfo}>
              <UserName frstName='Ksenia' scndName='Tuzova'/>
              <UserStatus/>
              <UserInfoList/>
              </div>
             
    </div>
    <Posts/>
    </div>
    )
}

