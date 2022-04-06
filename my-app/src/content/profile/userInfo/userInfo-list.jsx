import UserInfoCity from "./userInfoCityEducation/userInfoCity"
import UserInfoEducation from "./userInfoCityEducation/userInfoEducation"



const UserInfoList=(props)=>{
    return(
      <div>
             <ul className="userInfo-list">
              <UserInfoCity  city='Moscow'/>
              <UserInfoEducation nameOfOrg='school 1508' ></UserInfoEducation>
            </ul>
            </div>
    )
}

export default UserInfoList