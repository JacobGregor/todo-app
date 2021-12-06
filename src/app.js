import { React } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Settings from './components/settings/settings';
import Auth from './context/auth/login.js';
import './scss/header.scss';
import './scss/form.scss';
import './scss/footer.scss';
import AuthProvider from './context/auth/context.js';

function App() {
	return (
		<>
			<Router>
				{!AuthProvider.user}
				<Header />
				<Switch>
					{/* Main Route */}
					<Route exact path='/'>
						<Auth>
							<ToDo />
						</Auth>
					</Route>
					{/* Route to Settings */}
					<Route path='/settings'>
						<Auth>
							<Settings />
						</Auth>
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
