import Posts from './posts/posts'
import UserInfoList from './userInfo/userInfo-list'
import UserName from './userInfo/userName'
import UserStatus from './userInfo/userStatus'
import UserPhoto from './userInfo/userPhoto/userPhoto'


const Profile=()=>{
    return(
        <div className="content__wrapper-main">
         <div className="profile__wrapper">
          <UserPhoto/>
             <div className="content__userInfo">
              <UserName/>
              <UserStatus/>
              <UserInfoList/>
             </div>
            
    </div>
    <Posts/>
    </div>
    )
}

export default Profile