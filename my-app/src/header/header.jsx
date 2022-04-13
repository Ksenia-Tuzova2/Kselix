import HeaderStyle from './header.module.css'
import React from 'react'
import Logo from'./logo/logo'
import Avatar from'./avatar/avatar'
import LoginBtn from'./login_btn/login_btn'

import '../App.css';

export const Header=(props)=> {
  return (
    <header className={HeaderStyle.Header}>
      <Logo/>
      <div className={HeaderStyle.Flexgrow}></div>
      <Avatar/>
      <LoginBtn/>
    </header>
  );
};



