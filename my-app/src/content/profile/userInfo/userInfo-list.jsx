import UserInfoCity from "./userInfoCityEducation/userInfoCity"
import UserInfoEducation from "./userInfoCityEducation/userInfoEducation"
import React from 'react'
import UserPhoto from "./userPhoto/userPhoto"
import ProfileStyle from '../profile.module.css'
import UserName from "./userName/userName"
import UserStatus from "./userStatus/userStatus"



export const UserInfo=(props)=>{
    return(
      
      <div>
         <div className={ProfileStyle.Profile}>
           <UserPhoto/>
              <div className={ProfileStyle.Profile__userInfo}>
              <UserName frstName='Ksenia' scndName='Tuzova'/>
              <UserStatus/>
                  <ul className="userInfo-list">
                  <UserInfoCity  city='Moscow'/>
                  <UserInfoEducation nameOfOrg='school 1508' ></UserInfoEducation>
                  </ul>
              </div>
            
      </div>
      </div>
    )
}