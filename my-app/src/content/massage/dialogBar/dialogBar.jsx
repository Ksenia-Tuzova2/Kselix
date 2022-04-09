import DialogBarStyle from './dialogBar.module.css'
import React from 'react'

const DialogBar=(props)=>{
    return(
    <div className={DialogBarStyle.Massage__dialogsBar}>
        <div className={DialogBarStyle.Massage__dialogsBar__friendMassage}>
            <a  className={DialogBarStyle.FriendAvatar }href="#"> <img src="" alt="" /> </a>
            <div>
                <div className={DialogBarStyle.NameTimeMassageWrapper}>
            <span className={DialogBarStyle.FriendName}>Stanislav Batkov</span>
            <span className={DialogBarStyle.Time}>14:56</span>
            <div className={DialogBarStyle.FriendMassage}>Hey! How are u?</div>
            </div>

            </div>
    </div>
    </div>

       
    
    )
}

export default DialogBar