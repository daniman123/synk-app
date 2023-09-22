import "./Auth.css";
import { AuthMetaData } from "./authTypes";

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

const Auth = (props: AuthMetaData) => {
	return (
		<dialog open className="auth-handler-dialog">
			<div className="Auth-container">
				<div className="auth-title-container">
					<h4 className="auth-title-dialog">{props.title}</h4>
				</div>
				<div className="auth-handler-container">
					<div className="auth-handler">
						<form method="dialog" className="auth-form">
							{Object.entries(props.inputMetaData).map((val, index) => {
								let firstLetter = val[1].charAt(0).toUpperCase();
								let modifiedString = firstLetter + val[1].slice(1);
								return (
									<AuthInput
										key={index + val[1]}
										authInputName={val[1]}
										inputType={val[0] == "userName" ? "text" : val[0]}
										authLabel={modifiedString}
									/>
								);
							})}

							<button className="primary submit-auth" type="submit">
								{props.title}
							</button>
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default Auth;
