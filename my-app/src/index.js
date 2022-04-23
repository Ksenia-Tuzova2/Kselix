import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


const makeArr = [
  {
    name: 'Katya',
    time: '12:20',
    massage: 'YO',
  },
  {
    name: 'TASHA',
    time: '12:23',
    massage: 'ьц',
  },
]  

const massageData = [
  {
    massage: 'mmmmm',
  },
  {
    massage: 'lorem',
  },
  {
    massage: 'lorem',
  },
  {
    massage: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
  },
  {
    massage: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
  },
  {
    massage: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo blanditiis accusamus eius, laborum aliquam deserunt atque fuga tempore ad nemo quibusdam perspiciatis recusandae quas illum maxime laudantium aspernatur. Deleniti?',
  },
];



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <App makeArr={makeArr} massageData={massageData} />
    
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();