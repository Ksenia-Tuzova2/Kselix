
import ProfileIcon from './icons-menu-bar/codicon_account.svg'
import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'
const MenuBar=()=>{
    return(
        <div className='menubar-wrapper'>
        <ul className="menuBar-list">
            <li><a href='#'><img src={ProfileIcon}></img>Profile</a></li>
            <li><a href='#'><img src={MassageIcon}></img>Massage</a></li>
            <li><a href='#'><img src={FriendsIcon}></img>Friends</a></li>
            <li><a href='#'><img src={NewsIcon}></img>News</a></li>
            <li><a href='#'><img src={MusicIcon}></img>Music</a></li>
            <li><a href='#'><img src={SettingIcon}></img>Settings</a></li>
        </ul>
        </div>
    )
}

export default MenuBar