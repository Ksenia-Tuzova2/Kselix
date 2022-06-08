import { Routes, Route } from 'react-router-dom'
import ContentStyle from './content.module.css'
import MenuBar from './menu-bar/menu-bar';
import { Dialogs } from './dialogs/dialogs'
import { Profile } from './profile/profile'
import { Friends } from './friends/friends'
import { NewsFeed } from './news/newsfeed'

export const Content = ({ appState, addMassage ,addPost}) => {
	// debugger
	return (
		<div className={ContentStyle.wrapper}>
			<MenuBar state={appState}/>
				<Routes>
				<Route path='/dialogs/*' element={<Dialogs MakeArr={appState.Massage.makeArr} addMassage={addMassage}/> } />
				<Route path='/profile/*' element={<Profile massageData={appState.Profile.massageData} addPost={addPost}/>} />
					<Route path='/friends/*' element={<Friends />} />
					<Route path='/news/*' element={<NewsFeed massageData={appState.Profile.massageData} />} />
				</Routes>
		</div>

	);
}

