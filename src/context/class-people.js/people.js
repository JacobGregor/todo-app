import { PeopleContext } from '../class-example';
import React from 'react';

class People extends React.Component {
	static contextType = PeopleContext;

	render() {
		return (
			<>
				{this.context.people.map((person) => {
					<p>{person.name}</p>;
				})}
			</>
		);
	}
}
export default People;
