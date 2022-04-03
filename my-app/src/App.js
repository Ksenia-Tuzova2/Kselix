
import './null.module.css'
import './App.css';


import Header from "./header/header"
import MenuBar from "./menu-bar/menu-bar"
import Content from './content/content';
import Footer from './footer/footer';
import RegistrationForm from './content/loginform/registration/registrationForm';




const App=()=> {
  return (
    <div className="App">
      <header className='header'><Header/></header>
   <main className='main'>
      <div className='content-container flexbox'>
        <div className='margin'></div>
        <MenuBar/>
       <Content/>
       <div className='margin'></div>
    {/* <RegistrationForm/> */}
    </div>
    </main>
     <footer><Footer/></footer>
    </div>
  );
}

export default App;
