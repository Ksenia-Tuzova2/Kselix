
import DialogAreaStyle from './dialogArea.module.css'



const DialogArea=(props)=>{
    return(
<div className={DialogAreaStyle.DialogArea}>
   <div className={DialogAreaStyle.Massages}>
       <div className={DialogAreaStyle.MyMassage}>{props.myMassage}</div>
       </div> 
    <form action="#">
       <textarea placeholder='Type your massage...' value='MyMassage' myMassage='my text'></textarea>
       <input type="file" multiple='form/data' />
    </form>
</div>
    )
}

export default DialogArea