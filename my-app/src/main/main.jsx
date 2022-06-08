import { Routes, Route } from 'react-router-dom'
import MainStyle from './main.module.css'
import { Content } from '../content/content'; 
import { Login} from '../login/login'
export const Main = ({ appState, addMassage,addPost}) => {
// debugger
  return (
      <main className={MainStyle.Main} >
        <div className={MainStyle.Flexbox}>
          <div className={MainStyle.Margin}></div>
					<Routes>
          <Route path='/content/*' element={<Content appState={appState} addMassage={addMassage} addPost={addPost}/>}/>
					<Route path='/exit' element={<Login appState={appState} />}/>
			
				</Routes>
          <div className={MainStyle.Margin}></div>
        </div>
      </main>
   
  );
}


