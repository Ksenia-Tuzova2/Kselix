import React from 'react'
import NewPostsStyle from './newPosts.module.css'
import Avatar from "../../../../header/avatar/avatar"
import Time from './time'
import Massage from './massage'
import Like from './like/like'
import Dislike from './dislike/dislike'
import UserName from '../../userInfo/userName/userName'



const NewPosts=(props)=>{

    let LikeNumber=()=>{
     for(let i=0; ;i++){

     }
    }

    let MassageData=[
        {
             massage:'mmmmm',
        }
    ];
    let LikeCounter=[
        {
            counter:4,
        },
    ];

    let DisikeCounter=[
        {
            counter:4,
        },
    ];

    return(
        <div className={NewPostsStyle.NewPost}>
                <Avatar/>
                <div className="Name-time-text">
                    <div className="box">              
                <UserName frstName='Ksenia' scndName='Tuzova'/>
                <Time/>
                </div> 
                <Massage  massage={MassageData[0].massage}/>
                <div className={NewPostsStyle.NewPost__likeDislikeWrapper}>
                <Like counter={LikeCounter[0].counter}></Like>
                <div className={NewPostsStyle.FlexGrow}></div>
                <Dislike counter={DisikeCounter[0].counter}/>
                </div>
                </div>
        </div>

    )
}



export default NewPosts