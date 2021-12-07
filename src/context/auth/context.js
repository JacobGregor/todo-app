import React, { useState } from 'react';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

// dummy users for testing
const testUsers = {
	administrator: {
		username: 'administrator',
		password: 'test',
		capabilities: ['create', 'read', 'update', 'delete'],
	},
	user: { username: 'user', password: 'test', capabilities: ['read'] },
};

const SECRET = process.env.REACT_APP_SECRET || 'secretstring';

function AuthProvider({ children }) {
	// declare state variables
	const [user, setUser] = useState({
		username: '',
		token: '',
		capabilities: [],
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function isAuthorized(capability) {
		// check a user capilities and return a boolean if the capability exists for the user.
		return user?.capabilities?.includes(capability);
	}

	function login(username, password) {
		console.log('hitting the login function');
		// send a http request with username and password in the request headers
		let user = testUsers[username];
		console.log(user);
		// validating appropriate user stuff is returned from the server.
		if (user) {
			const token = jwt.sign({ user }, SECRET);
			setUser({
				username: user.username,
				token: token,
				capabilities: user.capabilities,
			});
			console.log('this is the login console before setting', isLoggedIn);
			setIsLoggedIn(true);
			console.log('this is the login console after setting', isLoggedIn);
		}
	}

	function logout() {
		if (isLoggedIn) {
			setUser({ username: '', token: '', capabilities: [] });
			setIsLoggedIn(false);
		}
	}

	return (
		<LoginContext.Provider
			value={{ user, isLoggedIn, login, logout, isAuthorized }}
		>
			{children}
		</LoginContext.Provider>
	);
}

export default AuthProvider;
