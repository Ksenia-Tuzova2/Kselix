import {Routes, Route , Link} from 'react-router-dom'
import React from 'react'
import {DialogArea} from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'
import { Massage } from '../massage'
import UserName from '../../profile/userInfo/userName/userName'

const MakeArr=[
    { name:'Katya',
      time:'12:20',
      massage:'YO',},
      { name:'TASHA',
      time:'12:23',
      massage:'ьц',},   
    ]
    
//попробуем отрисовать все это в диалог айтем при помощи мап
//так , все сработало

//мап используй без ретурна, просто говори чего нужно возвращать

let RenderDialogItem=MakeArr.map((el)=><Link to='DialogArea'><DialogItem name={el.name} id={el.id} time={el.time} massage={el.massage}/></Link>
)

//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает

 export const DialogBar=(props)=>{
      return(
   <div className='dialogBar'>
{RenderDialogItem}         
   </div>

      )
  }
