import React from 'react'
import Box from '../../box.module.css'
import Btn from '../../btn/btn'
import RegistrationForm from './registration/registrationForm'
import {Link, Routes, Route} from 'react-router-dom'
export const Autorization=(props)=>{
    return(
                <div className={Box.Box}>
<form action="get">
<input type='text' placeholder='login'/>
<input type='password' placeholder='password'/>
<Link to='/menu-bar'><Btn name='come in'></Btn></Link>

</form>
<div>or</div>
<RegistrationForm/>
                </div>
    )
}