import React from 'react';
import MainStyle from './main.module.css'
import MenuBar from '../menu-bar/menu-bar'


const Main=()=> {
  return (
   <main className={MainStyle.Main}>
      <div className={MainStyle.Flexbox}>
        <div className={MainStyle.Margin}></div>
       <MenuBar/>
       <div className={MainStyle.Margin}></div>
    </div>
    </main>
  );
}

export default Main;