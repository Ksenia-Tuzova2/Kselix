import NewPosts from './newPosts/newPosts'
import PostArea from './postArea/postArea'
import React from 'react'

const Posts=()=>{
    return(
    <div className="content__post">
       <PostArea/>
       
       <NewPosts/>
       <NewPosts/>
    </div>

    )
}

export default Posts