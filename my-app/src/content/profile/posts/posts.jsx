import NewPosts from './newPosts/newPosts'
import PostArea from './postArea/postArea'
import React from 'react'







export const Posts=(props)=>{

    let MakeNewPost = props.massageData.map((m) => <NewPosts massage={m.massage} />)

    return(
    <div className="content__post">
       <PostArea/>
    {MakeNewPost}
    </div>

    )
}
