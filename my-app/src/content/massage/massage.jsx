import {Routes, Route , Link} from 'react-router-dom'
import React from 'react'
import {DialogArea} from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'

  export const Massage=(props)=>{
      return(
          <div className="">
  <DialogBar/>
      <Routes>
           <Route  path='/dialogArea/*' element={<DialogArea/>}/>
      </Routes>
      </div>
      )
  }
