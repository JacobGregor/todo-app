import React from 'react';
export const SettingsContext = React.createContext();
import { useState } from 'react';

function SettingsProvider({ children }) {
	const [pagination, setPagination] = useState(3);
	const [sort, setSort] = useState('difficulty');
	const [completed, setCompleted] = useState(false);

	const values = {
		pagination: 3,
		rows: [5],
		sort: 'difficulty',
		completed: false,
		setCompleted,
	};

	return (
		<SettingsContext.Provider value={values}>
			{children}
		</SettingsContext.Provider>
	);
}

export default SettingsProvider;
