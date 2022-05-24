import {Routes, Route , Link} from 'react-router-dom'
import {DialogArea} from './dialogArea/dialogArea'
import { DialogBar } from './DialogBar/DialogBar'
import './massage.css'



    export const Massage=(props)=>{
        return(
            <div className="Massage" >
                <DialogBar makeArr={props.makeArr}/>
            
                    <Routes>
                        <Route path='/dialogArea/*' element={<DialogArea />} />
                    </Routes>
        </div>
        )
    }
