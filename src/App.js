import Container from './components/Container';
import Layout from './layout';
import { AuthProvider } from './context/AuthContext';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/authorization/Auth';
import AuthorizePage from './components/auth/AuthorizePage';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<AuthorizePage>
						<Layout>
							<Container />
						</Layout>
					</AuthorizePage>
				}
			/>
			<Route path='/auth' element={<Auth />} />
		</Routes>
	);
}

export default App;
