import { Routes, Route, Link } from 'react-router-dom'
import { Choose } from './dialogArea/choose'
import { DialogArea } from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'
import './dialogs.css'



export const Dialogs = ({ Massage, addMassage, updateMesText }) => {
    // debugger
    return (
        <div className="Massage" >
            <DialogBar MakeArr={Massage.makeArr} />

            <Routes>
                <Route path='*' element={<Choose />} />
                <Route path='/dialogArea/*'
                    element={<DialogArea addMassage={addMassage} MyMessage={Massage.MyMassage} updateMesText={updateMesText} />}/>
            </Routes>
        </div>
    )
}
