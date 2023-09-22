import "./Login.css";

export interface ILogin {
	exampleProp: boolean;
}

export interface IAuthInput {
	authInputName: string;
	inputType: string;
	authLabel: string;
}

export const AuthInput = ({
	authInputName,
	inputType,
	authLabel,
}: IAuthInput) => {
	return (
		<div className={"input-container" + authInputName}>
			<label className="auth-input-label">{authLabel}</label>
			<input
				className="auth-input"
				type={inputType}
				name={authInputName}
				id={authInputName}
			/>
		</div>
	);
};

const Login = ({ exampleProp }: ILogin) => {
	console.log(exampleProp);
	return (
		<dialog open className="auth-handler-dialog">
			<div className="Login-container">
				<div className="auth-title-container">
					<h4 className="auth-title-dialog">Login</h4>
				</div>
				<div className="auth-handler-login-container">
					<div className="auth-handler-login">
						<form method="dialog" className="auth-form">
							<AuthInput
								authInputName={"user-name"}
								inputType="text"
								authLabel="Username"
							/>
							<AuthInput
								authInputName={"password"}
								inputType="password"
								authLabel="Password"
							/>
							<button className="primary submit-auth" type="submit">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default Login;
