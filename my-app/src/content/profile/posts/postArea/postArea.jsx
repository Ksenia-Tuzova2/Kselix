import React from 'react'
import PostAreaStyle from './postArea.module.css'
import Box from '../../../../box.module.css'
import Btn from '../../../../btn/btn.module.css'

//выснос функции за пределы события онклик



let MakeRef = React.createRef()
// debugger
let AddPost = () => {

    let text = MakeRef.current.value;
    alert(text)
}

const PostArea = (props) => {
    return (
        <form action='#' method='get' className={PostAreaStyle.Form}>
            <input type="text" className={PostAreaStyle.Input + " " + Box.Box}
                placeholder='What`s news?' ref={MakeRef} />
            <button onClick={AddPost} className={PostAreaStyle.Btn + " " + Btn.Btn}
            >post</button>
        </form>
    )
}

export default PostArea