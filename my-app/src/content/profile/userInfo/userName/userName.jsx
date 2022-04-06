import UserNameStyle from './userName.module.css'

const UserName=(props)=>{
    return(
      <div className={UserNameStyle.UserName}>
    {props.frstName} {props.scndName}</div>
    )
}

export default UserName