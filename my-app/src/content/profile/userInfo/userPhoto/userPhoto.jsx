import userPhotostyle from './userPhoto.module.css'
import userPhoto from '../../../../img/myphoto.jpg'
import React from 'react'
const UserPhoto=(props)=>{
    return(
           <div className={userPhotostyle.content__userPhoto}><a href="#"><img src={userPhoto} alt="" /></a></div>
    )
}
export default UserPhoto