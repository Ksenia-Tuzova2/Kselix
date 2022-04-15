import DialogItemStyle from './DialogItem.module.css'
import React from 'react'

export const DialogItem=(props)=>{
    return(

        <div className={DialogItemStyle.Massage__dialogsBar__friendMassage}>
           
            <a  className={DialogItemStyle.FriendAvatar }href="#"> <img src="" alt="" /> </a>
            <div>
                <div className={DialogItemStyle.NameTimeMassageWrapper}>
            <span className={DialogItemStyle.FriendName}>{props.name}</span>
            <span className={DialogItemStyle.Time}>{props.time}</span>
            <div className={DialogItemStyle.FriendMassage}>{props.massage}</div>
            </div>

            </div>
            
    </div>
   
 
    )
}
