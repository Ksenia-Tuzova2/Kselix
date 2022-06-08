import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { DialogArea } from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'
import { Dialog } from '../dialogs'
import UserName from '../../profile/userInfo/userName/userName'

//мап используй без ретурна, просто говори чего нужно возвращать
//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает



export const DialogBar = ({ MakeArr}) => {

   let RenderDialogItem = MakeArr.map((el) => <Link to='dialogArea'>
      <DialogItem name={el.name} id={el.id} time={el.time} massage={el.massage} />
   </Link>)

   return (
      <div className='dialogBar'>
         {RenderDialogItem}
      </div>

   )
}
