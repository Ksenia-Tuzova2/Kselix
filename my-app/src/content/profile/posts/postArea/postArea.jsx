import React from 'react'

const PostArea=(props)=>{
    return(
        <div className="content__newpost-area">
            <form action='#' method='get'>
                <input type="text" className='input-for-posts' placeholder='What`s news?'/>
                <button>send</button>
             </form>
        </div>
    )
}

export default PostArea