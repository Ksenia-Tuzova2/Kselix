import ProfileStyle from './profile.module.css'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfo } from './userInfo/userInfo-list'



export const Profile = (props) => {
    return (
        <div >
            <UserInfo />
            <Posts massageData={props.massageData} />
        </div>
    )
}

