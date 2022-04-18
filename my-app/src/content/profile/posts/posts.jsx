import NewPosts from './newPosts/newPosts'
import PostArea from './postArea/postArea'
import React from 'react'

let MassageData=[
    {
         massage:'mmmmm',
    },
    {
        massage:'lorem',
   },
   {
    massage:'lorem',
},
];

let MakeNewPost=MassageData.map((m)=><NewPosts massage={m.massage}/>)


const Posts=()=>{
    return(
    <div className="content__post">
       <PostArea/>
    {MakeNewPost}
    </div>

    )
}

export default Posts