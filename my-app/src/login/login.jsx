import { Routes, Route } from 'react-router-dom'
import LoginStyle from './login.module.css'
import { RegistrationForm } from '../content/autorization/registration/registrationForm'
import { Authorization } from '../content/autorization/autorization';
import { Main } from '../main/main';

export const Login= ({ appState }) => {
	// debugger
	return (
		<>
				<Routes>
					<Route path='/autorization/*' element={<Authorization />} />
					<Route path='/main/*' element={<Main state={appState} />} />
					<Route path='/registrationForm/*' element={<RegistrationForm />} />
				</Routes>
		</>

	);
}

