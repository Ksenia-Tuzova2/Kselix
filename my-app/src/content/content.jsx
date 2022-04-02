import Avatar from '../header/avatar'
import userPhoto from '../img/myphoto.jpg'


const Content=()=>{
    return(
        <div className="content__wrapper-main">
         <div className="content__wrapper">
      <div className="content__userPhoto"><a href="#"><img src={userPhoto} alt="" /></a></div>
     
      <div className="content__userInfo">
          <div className="content__userName">Ksenia Tuzova</div>
          <div className="content__status">Gentle flower</div>
          <ul className="userInfo-list">
               <li>City: Moscow</li>
              <li>Education: school 1508</li>
            </ul>
    </div>
    </div>
    <div className="content__post">
        <div className="content__newpost-area">
    <input type="text" className='input-for-posts' placeholder='What`s news?'/>
        </div>
        <div className="newPost">
            <div className="avatar"><Avatar/></div>
           
            <div className="name-time-text">
            <div className="content__userName">Ksenia Tuzova</div>
             <div className="time">14:58</div>
            <div className="text">Hey</div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Content