import React from 'react';
import MainStyle from './main.module.css'
import MenuBar from '../menu-bar/menu-bar'
import { Autorization } from '../content/autorization/autorization';
import {Link, Routes, Route} from 'react-router-dom'


const Main=()=> {
  return (
   <main className={MainStyle.Main}>
      <div className={MainStyle.Flexbox}>
        <div className={MainStyle.Margin}></div>
     <Routes>
      <Route path='/autorization/*' element={<Autorization/>}></Route>
      <Route path='/menu-bar/*' element={ <MenuBar/>}></Route>
    </Routes>

       <div className={MainStyle.Margin}></div>
    </div>
    </main>
  );
}

export default Main;