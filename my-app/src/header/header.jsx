import HeaderStyle from './header.module.css'

import Logo from'./logo/logo'
import Avatar from'./avatar/avatar'
import LoginBtn from'./login_btn/login_btn'

import '../App.css';

const Header=(props)=> {
  return (
    <header className={HeaderStyle.Header}>
      <Logo/>
      <div className={HeaderStyle.Flexgrow}></div>
      <Avatar/>
      <LoginBtn/>
    </header>
  );
};


export default Header;
