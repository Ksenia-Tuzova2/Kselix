import './null.css'
import './App.css';
import React from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';

const App = ({ appState, addMassage,addPost}) => {
  // debugger
  return (
    <div className="App" MakeArr={appState.Massage.makeArr}>
      <Header />
      <Main appState={appState} addMassage={addMassage} addPost={addPost}/>
      <Footer />
    </div>
  );
}

export default App;
