import LikeStyle from './like.module.css'
import LikeIcon from './like.svg'
import React from 'react'

const Like = ({counter,pos}) => {
    return (
        <button className={LikeStyle.Like__btn} onClick={() => alert(pos)}>
            <div>{counter}</div>
                <img src={LikeIcon} alt="" />
            </button>
    )
}



export default Like