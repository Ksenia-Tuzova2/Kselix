import style from './menu-bar.module.css'
import Box from '../../box.module.css'
import ProfileIcon from './icons-menu-bar/codicon_account.svg'
import MassageIcon from './icons-menu-bar/carbon_email.svg'
import FriendsIcon from './icons-menu-bar/iconoir_group.svg'
import NewsIcon from './icons-menu-bar/icon_news.svg'
import MusicIcon from './icons-menu-bar/icon_music.svg'
import SettingIcon from './icons-menu-bar/cil_settings.svg'
import {  Link } from 'react-router-dom'


const MenuBar = ({state}) => {
    // debugger
    return (
            <nav className={style.menubar__wrapper+' '+Box.Box}>
                <ul className={style.menuBar__list}>
                    <li className={style.firstchild}><Link to='profile'><img src={ProfileIcon}></img><p>Profile</p></Link></li>
                    <li><Link to='dialogs'><img src={MassageIcon}></img><p>Dialogs</p></Link></li>
                    <li><Link to='friends'><img src={FriendsIcon}></img><p>Friends</p></Link></li>
                    <li><Link to='news'><img src={NewsIcon}></img><p>News</p></Link></li>
                    <li><Link to='music'><img src={MusicIcon}></img><p>Music</p></Link></li>
                    <li className={style.lastchild}><a href='#'><img src={SettingIcon}></img><p>Settings</p></a></li>
                </ul>
            </nav>
    )
}

export default MenuBar


