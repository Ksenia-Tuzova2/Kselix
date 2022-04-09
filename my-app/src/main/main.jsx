import React from 'react';
import Content from '../content/content';
import RegistrationForm from '../content/loginform/registration/registrationForm';
import MenuBar from '../menu-bar/menu-bar';
import MainStyle from './main.module.css'



const Main=()=> {
  return (
   <main className={MainStyle.Main}>
      <div className={MainStyle.Flexbox}>
        <div className={MainStyle.Margin}></div>
       <MenuBar/>
       
       <Content/>
       <div className={MainStyle.Margin}></div>
    {/* <RegistrationForm/> */}
    </div>
    </main>
  );
}

export default Main;
