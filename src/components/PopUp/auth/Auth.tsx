"use client";

import { FormEvent, useRef } from "react";
import "./Auth.css";
import { AuthMetaData } from "./authTypes";
import { handleLogin } from "../../../../lib/auth/login";

export interface IAuthInput {
	authInputName: string;
	inputType: string;
	authLabel: string;
	inputRef: any;
}

export const AuthInput = ({
	authInputName,
	inputType,
	authLabel,
	inputRef,
}: IAuthInput) => {
	return (
		<div className={"input-container" + authInputName}>
			<label className="auth-input-label">{authLabel}</label>
			<input
				onInput={(e: FormEvent<HTMLInputElement>) =>
					authLabel === "Password"
						? (inputRef.current.password = e.target.value)
						: (inputRef.current.userName = e.target.value)
				}
				className="auth-input"
				type={inputType}
				name={authInputName}
				id={authInputName}
			/>
		</div>
	);
};

const Auth = (props: AuthMetaData) => {
	const inputRef = useRef({ userName: "", password: "" });

	return (
		<dialog open className="auth-handler-dialog">
			<div className="Auth-container">
				<div className="auth-title-container">
					<h4 className="auth-title-dialog">{props.title}</h4>
				</div>
				<div className="auth-handler-container">
					<div className="auth-handler">
						<form
							className="auth-form"
							onSubmit={(e) => {
								e.preventDefault();
								const userLoginCredentials = {
									userName: inputRef.current.userName,
									password: inputRef.current.password,
								};
								handleLogin(userLoginCredentials).then(() =>
									console.log("submitted user cred.", userLoginCredentials)
								);
							}}
						>
							{Object.entries(props.inputMetaData).map((val, index) => {
								let firstLetter = val[1].charAt(0).toUpperCase();
								let modifiedString = firstLetter + val[1].slice(1);
								return (
									<AuthInput
										key={index + val[1]}
										inputRef={inputRef}
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
