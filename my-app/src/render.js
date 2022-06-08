
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AddMassage } from "./redux/state";
import { AddPost } from "./redux/state";
import {State} from './redux/state'

AddPost('hahhahha')
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 
 export let renderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>

				<App appState={State} addMassage={AddMassage} addPost={AddPost} />

			</BrowserRouter>
		</React.StrictMode>
	);
}
reportWebVitals();