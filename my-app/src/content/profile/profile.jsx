import ProfileStyle from './profile.module.css'
import React from 'react'
import { Posts } from './posts/posts'
import { UserInfo } from './userInfo/userInfo-list'



export const Profile = ({ massageData, addPost, newPostText, updateNewPostText}) => {
    // debugger
    return (
        <div >
            <UserInfo />
            <Posts massageData={massageData} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

