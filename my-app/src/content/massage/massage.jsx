import {Routes, Route , Link} from 'react-router-dom'
import React from 'react'
import {DialogArea} from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'
import './massage.css'

    export const Massage=(props)=>{
        return(
            <div className="Massage">
            <DialogBar/>

            <Routes>
                <Route  path='/massage/dialogArea/*' element={<DialogArea/>}/>
            </Routes>
        </div>
        )
    }
