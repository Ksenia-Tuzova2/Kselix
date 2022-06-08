import LikeStyle from './like.module.css'
import LikeIcon from './like.svg'
import React from 'react'

const Like = ({counter}) => {

    return (
        <div className={LikeStyle.Like__wrapper}> <a href='#' className={LikeStyle.like__btn} onClick={()=>alert('work')}>
            <div>{counter}</div>
                <img src={LikeIcon} alt="" />
            </a> </div>
    )
}



export default Like