import {Routes, Route, Link, NavLink } from 'react-router-dom'
import './massage.css'
import MassageArea1 from './massageArea1'
import {MassageArea2} from './massageArea2'
import {MassageArea3} from './massageArea3'

export const Massage=()=>{
    return(
<div >
   <div className="">  <div className="">
            <Link to='/massageArea1'>Dasha</Link>   
            <Link to='/massageArea2'> Katya</Link> 
            <Link to='/massageArea3'>Tas</Link>   
   </div>
      </div>
   <Routes>
     <Route path='/massageArea1' element={<MassageArea1/>}/>
     <Route path='/massageArea2' element={<MassageArea2/>}/>
     <Route path='/massageArea3' element={<MassageArea3/>}/>
  
 </Routes>
  
</div>
    )
}



const MassageMenu=()=>{
    return(
        <>

          
          
           </>
    )
}
{/* <Link to='/massageArea1'><MassageItem time='18;22' massage='ya'name='Dasha' /></Link>   
<Link to='/massageArea2'> <MassageItem time='22:22' massage='heq'name='Katya'/></Link> 
<Link to='/massageArea3'><MassageItem time='13:37' massage='sss'name='Tas'/></Link>   */}


// const MassageItem=(props)=>{
//     return(

// <div className='MassageFriend'>
           
//            <a  className='FriendAvatar' href="#"> <img src="" alt="" /> </a>
//            <div>
//                <div className='NameTimeWrapper'>
//            <span className='FriendName'>{props.name}</span>
//            <span className='Time'>{props.time}</span>
//            <div className='FriendMassage'>{props.massage}</div>
//            </div>

//            </div>
           
//    </div>
//     )
// }

