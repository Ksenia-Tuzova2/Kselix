import HeaderStyle from './header.module.css'
import React from 'react'
import Logo from'./logo/logo'
import Avatar from'./avatar/avatar'
import Btn from'../btn/btn'
import {Link, Routes, Route} from 'react-router-dom'
import '../App.css';

export const Header=(props)=> {
  return (
    <header className={HeaderStyle.Header}>
      <Logo/>
      <div className={HeaderStyle.Flexgrow}></div>
      <Avatar/>
      <Link to='/autorization/*'><Btn name='exit'/></Link>
    </header>
  );
};



