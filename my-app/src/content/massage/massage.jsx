import React from 'react'
import DialogArea from './dialogArea/dialogArea'
import DialogBar from './dialogBar/dialogBar'
import MassageStyle from './massage.module.css'


export const Massage=()=>{
    return(
        <div className={MassageStyle.Massage}> 
              <DialogBar/>
              <DialogArea className={MassageStyle.DialogArea}/>
        </div>
    )
}

