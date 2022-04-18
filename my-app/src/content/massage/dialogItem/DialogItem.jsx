import s from './DialogItem.module.css'
import React from 'react'




export const DialogItem=(props)=>{
    return(

        <div className={s.dialogBar__friendMassage}>
           
            <a  className={s.FriendAvatar }href="#"> </a>
                <div>
                    <div className={s.NameTimeMassageWrapper}>
                <div className={s.NameTimeWrapper}>
                <div className={s.FriendName}>{props.name}</div>
                <div className={s.Time}>{props.time}</div>
                </div>
                     <div className={s.FriendMassage}>{props.massage}</div>
                </div>

            </div>
            
    </div>
   
 
    )
}

