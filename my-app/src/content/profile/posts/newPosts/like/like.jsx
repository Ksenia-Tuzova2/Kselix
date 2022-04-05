import LikeStyle from './like.module.css'
import LikeIcon from './like.svg'

const Like=(props)=>{

    return(
       <div className={LikeStyle.Like__wrapper}>
           <div>{props.counter}</div>
           <a href='#' className={LikeStyle.like__btn}>
           <img src={LikeIcon} alt="" />
             </a> </div>
    )
}



export default Like