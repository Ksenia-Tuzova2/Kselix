
import DialogArea from './dialogArea/dialogArea'
import DialogBar from './dialogBar/dialogBar'
import MassageStyle from './massage.module.css'


const Massage=()=>{
    return(
        <div className={MassageStyle.Massage}> 
              <DialogBar/>
              <DialogArea className={MassageStyle.DialogArea}/>
        </div>
    )
}

export default Massage