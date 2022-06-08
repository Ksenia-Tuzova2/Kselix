import React from 'react'
import DialogAreaStyle from './dialogArea.module.css'
import Btn from '../../../btn/btn'
import Box from '../../../box.module.css'


export const DialogArea = ({ addMassage}) => {

    let CreateRef = React.createRef()

    let MakeMas = () => {
        let text = CreateRef.current.value
        addMassage(text)
    }
    return (
        <div className={DialogAreaStyle.DialogArea}>
            <div className={DialogAreaStyle.Massages}>
                <MyMasItem/>
                <YourMasItem/>
            </div>
            <form action="#" className={DialogAreaStyle.Form}>
                <textarea ref={CreateRef} className={DialogAreaStyle.TextInput+" "+Box.Box} placeholder='Type your massage...'  myMassage='my text'></textarea>
                <input type="file" className={DialogAreaStyle.FileInput} multiple='_form/data' />
                <button onClick={MakeMas}><Btn name='send' /></button>
            </form>
        </div>
    )
}

export const MyMasItem = (props) => {
    return (
            <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.FlexGrow}></div>
            <div className={DialogAreaStyle.MyMassage + ' ' + Box.Box}>hi</div>
            </div>

    )
}

export const YourMasItem = (props) => {
    return (
        <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.Massage + ' ' + Box.Box}>hi</div>
            <div className={DialogAreaStyle.FlexGrow}></div>
        </div>

    )
}

