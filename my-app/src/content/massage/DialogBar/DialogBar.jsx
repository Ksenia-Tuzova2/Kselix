import {Routes, Route , Link} from 'react-router-dom'
import React from 'react'
import {DialogArea} from '../dialogArea/dialogArea'
import { DialogItem } from '../dialogItem/DialogItem'
import { Massage } from '../massage'
import UserName from '../../profile/userInfo/userName/userName'

// import {MakeArr} from '../massage'


//теперь оно лежит в месседже

//попробуем отрисовать все это в диалог айтем при помощи мап
//так , все сработало

//мап используй без ретурна, просто говори чего нужно возвращать


//здесь нужно отрисовать название переменной в скобках {}, иначе ничего не сработает

 export const DialogBar=(props)=>{

    let RenderDialogItem = props.makeArr.map((el) => <Link to='DialogArea'><DialogItem name={el.name} id={el.id} time={el.time} massage={el.massage} /></Link> )

      return(
   <div className='dialogBar'>
   {RenderDialogItem}         
   </div>

      )
  }
