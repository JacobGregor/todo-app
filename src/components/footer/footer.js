import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
	render() {
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand>Code Fellows 401-To-Do-App</Navbar.Brand>
			</Navbar>
		);
	}
}

export default Footer;
