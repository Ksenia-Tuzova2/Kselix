import style from './menu-bar.module.css'
import ProfileIcon from './icons-menu-bar/codicon_account.svg'
import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'

const MenuBar=()=>{
    return(
        <nav className={style.menubar__wrapper}>
        <ul className={style.menuBar__list}>
            <li className={style.firstchild}><a href='#'><img src={ProfileIcon}></img><p>Profile</p></a></li>
            <li><a href='#'><img src={MassageIcon}></img><p>Massage</p></a></li>
            <li><a href='#'><img src={FriendsIcon}></img><p>Friends</p></a></li>
            <li><a href='#'><img src={NewsIcon}></img><p>News</p></a></li>
            <li><a href='#'><img src={MusicIcon}></img><p>Music</p></a></li>
            <li className={style.lastchild}><a href='#'><img src={SettingIcon}></img><p>Settings</p></a></li>
        </ul>
         </nav>
    )
}

export default MenuBar

