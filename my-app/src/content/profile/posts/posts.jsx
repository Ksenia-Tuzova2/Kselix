import NewPosts from './newPosts/newPosts'
import PostArea from './postArea/postArea'

// debugger
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