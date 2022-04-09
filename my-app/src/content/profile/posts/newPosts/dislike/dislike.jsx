import LikeStyle from './dislike.module.css'
import DislikeIcon from './dislike.svg'
import React from 'react'
const Dislike=(props)=>{

    return(
       <div className={LikeStyle.Dislike__wrapper}>
           <div>{props.counter}</div>
           <a href='#' className={LikeStyle.like__btn}>
           <img src={DislikeIcon} alt="" />
             </a> </div>
    )
}



export default Dislike