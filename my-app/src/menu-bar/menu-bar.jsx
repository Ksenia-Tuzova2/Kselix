import style from './menu-bar.module.css'
import ProfileIcon from './icons-menu-bar/codicon_account.svg'
import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'

import {Routes, Route , Link} from 'react-router-dom'
import Massage from '../content/massage/massage'
import Profile from '../content/profile/profile'
import Friends from '../content/friends/friends'
// import Friends from '#'
// import News from '#'
// import Music from '#'
// import Settings from '#'


const MenuBar=()=>{
    return(
        
        <nav className={style.menubar__wrapper}>
        <ul className={style.menuBar__list}>
            <li className={style.firstchild}><a href='/profile'><img src={ProfileIcon}></img><p>Profile</p></a></li>
            <li><a href='/massage'><img src={MassageIcon}></img><p>Massage</p></a></li>
            <li><a href='/friends'><img src={FriendsIcon}></img><p>Friends</p></a></li>
            <li><a href='/news'><img src={NewsIcon}></img><p>News</p></a></li>
            <li><a href='/music'><img src={MusicIcon}></img><p>Music</p></a></li>
            <li className={style.lastchild}><a href='#'><img src={SettingIcon}></img><p>Settings</p></a></li>
        </ul>
        <Routes>
<Route path='/profile' render={()=><Profile/>}/>
    <Route path='/massage' render={()=><Massage/>}/>
    <Route path='/massage' render={()=><Friends/>}/>
     {/* <Route path='/massage' element={<News/>}/>
    <Route path='/massage' element={<Music/>}/>
    <Route path='/massage' element={<Settings/>}/> */}
    
</Routes>
         </nav>


         

    )
}



export default MenuBar

