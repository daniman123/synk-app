import "./Login.css";

export interface ILogin {
	exampleProp: string;
}

const Login = ({ exampleProp }: ILogin) => {
	console.log(exampleProp);
	return (
		<div className="Login-container">
			<div className="auth-handler-login-container">
				<div className="auth-handler-login">
					<div className="auth-input-container">
						<div className="input-container user-name">
							<h3>Login</h3>
							<input className="auth-handler-input user-name" type="text" />
						</div>
						<div className="input-container password">
							<h3>Password</h3>
							<input className="auth-handler-input password" type="text" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
