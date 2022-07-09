import React from 'react'
import Box from '../../box.module.css'
import BtnStyle from '../../btn.module.css'
import RegistrationForm from './registration/registrationForm'
import {Link, Routes, Route} from 'react-router-dom'




export const Authorization=(props)=>{
    return(
                <div className={Box.Box}>
<form action="get">
<input type='text' placeholder='login'/>
<input type='password' placeholder='password'/>
                <Link to='/exit'>come in</Link>

</form>
<div>or</div>
            <Link className={BtnStyle.Btn} to='/registrationForm'>registration</Link>

                </div>
    )
}