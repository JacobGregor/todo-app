import { React, useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from './context';

function isAuthorized({ children }) {
	const loginContext = useContext(LoginContext);

	const isLoggedIn = loginContext.isLoggedIn;
	const canDo = loginContext.capability
		? loginContext.can(loginContext.capability)
		: true;
	const okToRender = isLoggedIn && canDo;

	return <When condition={okToRender}>{children}</When>;
}

export default isAuthorized;
