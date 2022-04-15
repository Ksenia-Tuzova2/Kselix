import {Routes, Route , Link} from 'react-router-dom'
import React from 'react'
import {DialogArea} from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'

  export const DialogBar=(props)=>{
      return(
    
   <div className='dialogBar'>
       <Link to='DialogArea'><DialogItem id='1' name="Sasha" time='14:56' massage='Hey! How are u?'/></Link>
           <Link to='DialogArea'><DialogItem id='2' name="Dasha" time='14:17' massage='AAAAAAA'/></Link>
           <Link to='DialogArea'><DialogItem id='3' name="Katya" time='12:22' massage='Mow'/></Link>
   </div>

      )
  }
