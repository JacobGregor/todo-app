import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ToDo from './components/todo/todo.js';
// import Header from './components/header';

function App() {
	return (
		<>
			<ToDo />
		</>
	);
}

export default App;
