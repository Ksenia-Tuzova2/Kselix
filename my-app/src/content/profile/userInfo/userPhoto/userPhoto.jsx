import PhotoStyle from './userPhoto.module.css'
import userPhoto from '../../../../img/myphoto.jpg'
import React from 'react'
const UserPhoto=(props)=>{
    return(
        <div className={PhotoStyle.content__userPhoto}><a href="#"><img className={PhotoStyle.img} src={userPhoto} alt="" /></a></div>
    )
}
export default UserPhoto