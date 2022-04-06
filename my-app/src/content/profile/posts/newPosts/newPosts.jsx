import NewPostsStyle from './newPosts.module.css'
import Avatar from "../../../../header/avatar/avatar"
import UserName from '../../userInfo/userName/userName'
import Time from './time'
import Massage from './massage'
import Like from './like/like'
import Dislike from './dislike/dislike'




const NewPosts=(props)=>{

    return(
        <div className={NewPostsStyle.NewPost}>
            <Avatar/>
            <div className="Name-time-text">               
                <UserName/>
               <Time/>
               <Massage  massage='mmmmm'/>
               <div className={NewPostsStyle.NewPost__likeDislikeWrapper}>
               <Like counter='4'></Like>
               <div className={NewPostsStyle.FlexGrow}></div>
               <Dislike counter='4'/>
               </div>
               <script></script>
            </div>
        </div>

    )
}



export default NewPosts