import React from 'react'
import DialogAreaStyle from './dialogArea.module.css'



export const DialogArea=(props)=>{
    return(
<div className={DialogAreaStyle.DialogArea}>
   <div className={DialogAreaStyle.Massages}>
       {/* <div className={DialogAreaStyle.MyMassage}>ssss</div> */}
       </div> 
    <form action="#">
       <textarea placeholder='Type your massage...' value='MyMassage' myMassage='my text'></textarea>
       <input type="file" multiple='form/data' />
       <button>send</button>
    </form>
</div>
    )
}

