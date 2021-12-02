import React, { useState } from 'react';

export const PeopleContext = React.createContext();

function PeoplePRovider({ children }) {
	//

	cont[(currentPerson, setCurrentPerson)] = useState({});
	const [people, setPeople] = useState([]);

	/// THis is going to give our application a set of behaviors they can allmuse w/o giving direct control to the source of Truth but rather gives them a specific use case w/ built in systems in place to help protect our application.
	const values = {
		currentPErson,
		people,
		setCurrentPerson: ({ name, role }) => {
			if (!name || !role) {
				throw new Error('invalid, requires name && role');
			} else {
				setCurrentPerson({ name, role });
			}
		},
		addPerson: ({ name, role }) => {
			if (!name || !role) {
				throw new Error('invalid, requires name && role');
			} else {
				setPeople([...people, { name, role }]);
			}
		},
	};

	return (
		<PeopleContext.Provider values={values}>{children}</PeopleContext.Provider>
	);
}

export default PeoplePRovider;
