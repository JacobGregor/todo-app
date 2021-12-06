import React from 'react';
import ReactDOM from 'react-dom';
import SettingsProvider from './context/settings';
import AuthProvider from './context/auth/context';
import App from './app.js';

function Main() {
	return (
		<SettingsProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</SettingsProvider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
