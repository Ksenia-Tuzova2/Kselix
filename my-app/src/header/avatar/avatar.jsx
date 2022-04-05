
import styleAvatar from './avatar.module.css'
import Img from '../../img/myphoto.jpg'

const Avatar=()=>{
    return(
        <div className={styleAvatar.Avatar}>
        <a href='#'>
        <img src={Img}
        alt=""></img>
        </a>
        </div>
    )
}

export default Avatar