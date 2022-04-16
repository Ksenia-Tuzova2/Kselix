import React from 'react'
import BtnStyle from './btn.module.css'
const Btn=(props)=>{
    return(
        <div >
        <a className={BtnStyle.Btn} href="#">{props.name}
        </a>
        </div>
    )
}

export default Btn