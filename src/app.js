import { React } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Settings from './components/settings/settings';
import Auth from './context/auth/auth';
import Login from './context/auth/login';
import './scss/header.scss';
import './scss/form.scss';

function App() {
	return (
		<>
			<Router>
				<Login />
				<Auth>
					<Header />
					<Switch>
						{/* Main Route */}
						<Route exact path='/'>
							<ToDo />
						</Route>
						{/* Route to Settings */}
						<Route path='/settings'>
							<Settings />
						</Route>
					</Switch>
					<Footer />
				</Auth>
			</Router>
		</>
	);
}

export default App;
