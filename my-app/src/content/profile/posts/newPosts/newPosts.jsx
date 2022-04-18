import React from 'react'
import s from './newPosts.module.css'
import Avatar from "../../../../header/avatar/avatar"
import Time from './time'
import Like from './like/like'
import Dislike from './dislike/dislike'
import UserName from '../../userInfo/userName/userName'


    


const NewPosts=(props)=>{


    let DisikeCounter=[
        {
            counter:4,
        },
    ];
 
  ;
//     let LikeCounter=(function(){for(let l=0;l<=1;l++){return l}});

//     console.log()

//     LikeCounter();

//   function countRabbits() {
//     for(let i=1; i<=3; i++) {
//       alert("Кролик номер " + i);
//     }
//   };


<input type="button" onclick="countRabbits()" value="Считать кроликов!"></input>


    return(
        <div className={s.NewPost}>
                <Avatar/>
                <div className="Name-time-text">
                    <div className="box">              
                <UserName frstName='Ksenia' scndName='Tuzova'/>
                <Time/>
                </div> 
                <div className="Massage">{props.massage}</div>
                <div className={s.NewPost__likeDislikeWrapper}>
                <Like ></Like>
                <div className={s.FlexGrow}></div>
                <Dislike counter={DisikeCounter[0].counter}/>
                </div>
                </div>
        </div>

    )
}



export default NewPosts