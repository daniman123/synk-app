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
			<label>
				{authLabel}
				<input type={inputType} name={authInputName} id={authInputName} />
			</label>
		</div>
	);
};

const Login = ({ exampleProp }: ILogin) => {
	console.log(exampleProp);
	return (
		<dialog open={exampleProp} className="dees">
			<div className="Login-container">
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
							<button className="submit-auth" type="submit">
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
