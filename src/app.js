import { React } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Settings from './components/settings/settings';
import './scss/header.scss';
import './scss/form.scss';
import './scss/footer.scss';

function App() {
	return (
		<>
			<Router>
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
			</Router>
		</>
	);
}

export default App;
