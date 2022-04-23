import './null.css'
import './App.css';
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import MainStyle from './main.module.css'
import {Header} from './header/header'
import Footer from './footer/footer';
import { RegistrationForm } from './content/autorization/registration/registrationForm'
import { Authorization } from './content/autorization/autorization';
import MenuBar from './menu-bar/menu-bar';

const App=(props)=> {

  return (
    <div className="App" makeArr={props.makeArr}>
      <Header />
        <main className={MainStyle.Main} >
          <div className={MainStyle.Flexbox}>
            <div className={MainStyle.Margin}></div>
            <Routes>
              <Route path='/autorization/*' element={<Authorization />} />
            <Route path='/menu-bar/*' element={<MenuBar makeArr={props.makeArr} massageData={props.massageData} />} />
            {/*будь аккуратнее куда суешь пропсы */}
              <Route path='/registrationForm/*' element={<RegistrationForm/>} />
            </Routes>

            <div className={MainStyle.Margin}></div>
          </div>
        </main>


     <Footer/>
    </div>
  );
}

export default App;
