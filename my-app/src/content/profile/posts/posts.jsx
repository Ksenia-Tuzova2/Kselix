import NewPosts from './newPosts/newPosts'
import PostArea from './postArea/postArea'
import React from 'react'


export const Posts = ({ massageData, addPost})=>{
// debugger
    let MakeNewPost = massageData.map((m) => <NewPosts massage={m.massage} />)

    return(
    <div className="content__post">
            <PostArea addPost={addPost}/>
    {MakeNewPost}
    </div>

    )
}
