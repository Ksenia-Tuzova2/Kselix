import FriendsStyle from './friends.module.css'
import React from 'react'
import Friend from './friend/friend'

export const Friends=(props)=>{
    return(
    <div className={FriendsStyle.Friends}>
        <Friend friendName='Stanislav Borsch'/>
 </div>
    
    )
}


