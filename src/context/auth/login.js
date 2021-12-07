import React from 'react';
import { When } from 'react-if';
import { LoginContext } from '../auth/context';

class Login extends React.Component {
	static contextType = LoginContext;

	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	handleChange = (e) => {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.context.login(this.state.username, this.state.password);
	};

	render() {
		console.log(this.context.isLoggedIn);
		return (
			<>
				<When condition={this.context.isLoggedIn}>
					<button onClick={this.context.logout}>Log Out</button>
				</When>

				<When condition={!this.context.isLoggedIn}>
					<form onSubmit={this.handleSubmit}>
						<input
							placeholder='UserName'
							name='username'
							onChange={this.handleChange}
						/>
						<input
							placeholder='password'
							name='password'
							onChange={this.handleChange}
						/>
						<button>Login</button>
					</form>
				</When>
			</>
		);
	}
}

export default Login;
