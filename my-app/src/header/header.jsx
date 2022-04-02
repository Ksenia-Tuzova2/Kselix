import Logo from'./logo'
import Avatar from'./avatar'
import LoginBtn from'./login_btn'

import '../App.css';

const Header=()=> {
  return (
    <div className="Header">
      <Logo/>
      <div className='flexgrow'></div>
      <Avatar/>
      <LoginBtn/>
    </div>
  );
};


export default Header;
