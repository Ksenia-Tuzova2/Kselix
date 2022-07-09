import React from 'react'
import DialogAreaStyle from './dialogArea.module.css'
import Box from '../../../box.module.css'
import BtnStyle from '../../../btn.module.css'

// отлично, функции работают, но криво . Я хочу чтобы отрисовывались маленькие сообщения, а не пустые плашки в диалогбаре

export const DialogArea = ({ addMassage, MyMessage, updateMesText}) => {
// debugger

let mapMyMes=MyMessage.map((el)=><MyMasItem MyMessage={el.massage}/>)

    const CreateRef = React.createRef()

    let MakeMas = () => {
        let text = CreateRef.current.value
        addMassage(text)
    }
    let OnMesChange = () => {
        let text = CreateRef.current.value
        updateMesText(text)
    }
    return (
        <div className={DialogAreaStyle.DialogArea}>
            <div className={DialogAreaStyle.Massages}>
                <YourMasItem />
                {mapMyMes}
                
            </div>
            <div className={DialogAreaStyle.Form}>

                <textarea ref={CreateRef} className={DialogAreaStyle.TextInput+" "+Box.Box} placeholder='Type your massage...' value={MyMessage[0].newMesText}></textarea>
                <input type="file" className={DialogAreaStyle.FileInput} multiple='_form/data' />
                <button onClick={MakeMas} onChange={OnMesChange} className={BtnStyle.Btn}>send</button>
            </div>
        </div>
    )
}

export const MyMasItem = ({MyMessage}) => {
    return (
            <div className={DialogAreaStyle.MassageWrap}>
            <div className={DialogAreaStyle.FlexGrow}></div>
            <div className={DialogAreaStyle.MyMassage + ' ' + Box.Box}>{MyMessage}</div>
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

