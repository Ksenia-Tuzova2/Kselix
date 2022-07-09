import './null.css'
import './App.css';
import React from 'react';
import { Header } from './header/header'
import Footer from './footer/footer';
import { Main } from './main/main';


const App = ({ appState, addMassage, addPost, updateNewPostText, updateMesText}) => {
  // debugger

  return (
    <div className="App" MakeArr={appState.Massage.makeArr}>
      <Header />
      <Main appState={appState} addMassage={addMassage} addPost={addPost} updateNewPostText={updateNewPostText} updateMesText={updateMesText}/>
      <Footer />
    </div>
  );
}

export default App;

//так, я хочу круговорот флакса на каждый символ 
//открытие- важна последовательность когда прокидываешь пропсы