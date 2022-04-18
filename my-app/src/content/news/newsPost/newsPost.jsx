import Avatar from '../../../header/avatar/avatar'
import Time from '../../profile/posts/newPosts/time'
import UserName from '../../profile/userInfo/userName/userName'
import NewsPostStyle from './newsPost.module.css'
import Box from '../../../box.module.css'

export const NewsPost=(props)=>{
    return(
        <div className={NewsPostStyle.NewsPost+" "+Box.Box}>
            <div className={NewsPostStyle.Wrapper}>
            <Avatar/> 
            <UserName frstName='Ksenia' scndName='Tuzova'/>
            <Time/>
            </div>
      <div className={NewsPostStyle.TextPost}>
        {props.text}
      </div>
      <img className={NewsPostStyle.ImgPost} src='#'></img>
    </div>
    )
}
