import React from 'react'
import DialogAreaStyle from './dialogArea.module.css'
import Btn from '../../../btn/btn'
import Box from '../../../box.module.css'


export const DialogArea = (props) => {
    return (
        <div className={DialogAreaStyle.DialogArea}>
            <div className={DialogAreaStyle.Massages}>
                {/* <div className={DialogAreaStyle.MyMassage}>ssss</div> */}
            </div>
            <form action="#" className={DialogAreaStyle.Form}>
                <input type='text' className={DialogAreaStyle.TextInput+" "+Box.Box} placeholder='Type your massage...'  myMassage='my text'></input>
                <input type="file" className={DialogAreaStyle.FileInput} multiple='form/data' />
             <Btn name='send' />
            </form>
        </div>
    )
}

