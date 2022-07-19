import {Store} from "./redux/store";


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));

 let renderEntireTree = (Store) => {
	// debugger
	root.render(
		<React.StrictMode>
			<BrowserRouter>

				<App appState={Store.getState()} addMassage={Store.AddMassage} addPost={Store.AddPost} updateNewPostText={Store.updateNewPostText} updateMesText={Store.updateMesText} />

			</BrowserRouter>
		</React.StrictMode>
	);
	reportWebVitals();
 }
renderEntireTree(Store) 
//НЕ МОГУ ЗДЕСЬ ВЫЗВАТЬ ГЕТСТЕЙТ СО СКОБКАМИ

//это колбек, когда одна функция вызывает другую
Store.subscribe(renderEntireTree)


//пишем скобки рядом с функцией, когда ходим ее вызвать прямо здесь, А ЕСЛИ ХОТИМ ПЕРЕДАТЬ - НЕ ВЫЗЫВАЕМ