import Avatar from '../../../header/avatar/avatar'
import Time from '../../profile/posts/newPosts/time'
import UserName from '../../profile/userInfo/userName/userName'
import NewsPostStyle from './newsPost.module.css'

export const Profile=(props)=>{
    return(
        <div className={NewsPostStyle.NewsPost}>
            <div className={NewsPostStyle.Wrapper}>
            <Avatar/> 
            <UserName/>
            <Time/>
            </div>
      <div className={NewsPostStyle.TextPost}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?
      </div>
      <img className={NewsPostStyle.ImgPost} src='#'></img>
    </div>
    )
}
