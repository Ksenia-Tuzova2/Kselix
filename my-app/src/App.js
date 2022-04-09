import './null.module.css'
import './App.css';
import React from 'react';

import Header from "./header/header"
import Footer from './footer/footer';
import Main from './main/main';

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
