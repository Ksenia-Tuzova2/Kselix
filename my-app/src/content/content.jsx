import ContentStyle from './content.module.css'
import Massage from './massage/massage'
import Profile from './profile/profile'
import {Routes} from 'react-router-dom'
import Friends from './friends/friends'

const Content=()=>{
    return(
        <div className={ContentStyle.Content}>
        {/* <Massage/> */}
        {/* <Profile/> */}
       <Friends/>
    </div>
    )
}

export default Content