import './null.css'
import './App.css';
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'

import {Header} from './header/header'
import Footer from './footer/footer';
import Main from './main/main';
import { Autorization } from './content/autorization/autorization';
import MenuBar from './menu-bar/menu-bar';

const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Main className='Main'/>


     
     <Footer/>
    </div>
  );
}

export default App;
