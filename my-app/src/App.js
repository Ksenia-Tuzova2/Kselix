// import logo from './logo.svg';
import './App.css';
import Header from "./header/header"
import MenuBar from "./menu-bar/menu-bar"
import Content from './content/content';




const App=()=> {
  return (
    <div className="App">
      <div className='content-container'><Header/></div>
      <div className='content-container flexbox'><MenuBar/>
    <Content></Content></div>
      
    </div>
  );
}

export default App;
