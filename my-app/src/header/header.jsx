import HeaderStyle from './header.module.css'
import React from 'react'
import Logo from './logo/logo'
import Avatar from './avatar/avatar'
import BtnStyle from '../btn.module.css'
import { Link, Routes, Route } from 'react-router-dom'
import '../App.css';

export const Header = (props) => {
  return (
    <header className={HeaderStyle.Header}>
      <Logo />
      <div className={HeaderStyle.Flexgrow}></div>
      <Avatar />
      <Link className={BtnStyle.Btn} to='/content' >come in</Link>

    
    </header>
  );
};



