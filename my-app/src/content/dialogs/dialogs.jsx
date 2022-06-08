import { Routes, Route, Link } from 'react-router-dom'
import { Choose } from './dialogArea/choose'
import { DialogArea } from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'
import './dialogs.css'



export const Dialogs = ({ MakeArr }) => {
    // debugger
    return (
        <div className="Massage" >
            <DialogBar MakeArr={MakeArr} />

            <Routes>
                <Route path='*' element={<Choose />} />
                <Route path='/dialogArea/*' element={<DialogArea />} />
            </Routes>
        </div>
    )
}
