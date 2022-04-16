import DialogItemStyle from './DialogItem.module.css'
import React from 'react'

export const DialogItem=(props)=>{
    return(

        <div className={DialogItemStyle.dialogBar__friendMassage}>
           
            <a  className={DialogItemStyle.FriendAvatar }href="#"> </a>
            <div>
                <div className={DialogItemStyle.NameTimeMassageWrapper}>
                    <div className={DialogItemStyle.NameTimeWrapper}>
            <div className={DialogItemStyle.FriendName}>{props.name}</div>
            <div className={DialogItemStyle.Time}>{props.time}</div>
            </div>
            <div className={DialogItemStyle.FriendMassage}>{props.massage}</div>
            </div>

            </div>
            
    </div>
   
 
    )
}
