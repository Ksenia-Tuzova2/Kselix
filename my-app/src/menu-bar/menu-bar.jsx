import style from './menu-bar.module.css'
import ProfileIcon from './icons-menu-bar/codicon_account.svg'
import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'
import React from 'react'

import {Routes, Route , Link} from 'react-router-dom'
import {Massage} from '../content/massage/massage'
import {Profile} from '../content/profile/profile'
import {Friends} from '../content/friends/friends'

// import News from '#'
// import Music from '#'
// import Settings from '#'


const MenuBar=()=>{
    return(
     
<>
<nav className={style.menubar__wrapper}>
<ul className={style.menuBar__list}>
    <li className={style.firstchild}><Link to='/profile'><img src={ProfileIcon}></img><p>Profile</p></Link></li>
    <li><Link to='massage'><img src={MassageIcon}></img><p>Massage</p></Link></li>
    <li><Link to='/friends'><img src={FriendsIcon}></img><p>Friends</p></Link></li>
    <li><Link to='/news'><img src={NewsIcon}></img><p>News</p></Link></li>
    <li><Link to='/music'><img src={MusicIcon}></img><p>Music</p></Link></li>
    <li className={style.lastchild}><a href='#'><img src={SettingIcon}></img><p>Settings</p></a></li>
</ul>
 </nav>
 <Routes>
     <Route path='/massage/*' element={<Massage/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/friends' element={<Friends/>}/>
 </Routes>
 </>

    )
}

export default MenuBar


