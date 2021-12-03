import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand>Jakes To-Do's</Navbar.Brand>
			<Nav.Link as={Link} href='/' to='/'>
				To-do
			</Nav.Link>
			<Nav.Link as={Link} href='/settings' to='/settings'>
				Settings
			</Nav.Link>
		</Navbar>
	);
}

export default Header;
