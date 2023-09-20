import React from "react";
import { INavBar } from "../NavBar";

export const LoginButton = () => {
	return (
		<div className="nav-bar-log-in-container">
			<div className="log-in-button-container">
				<button className="primary log-in-button">Login</button>
			</div>
		</div>
	);
};

export const SignUpButton = () => {
	return (
		<div className="nav-bar-sign-up-container">
			<div className="sign-up-button-container">
				<button className="primary sign-up-button">Sign up</button>
			</div>
		</div>
	);
};

export const LogoutButton = () => {
	return (
		<div className="nav-bar-log-out-container">
			<div className="log-out-button-container">
				<button className="primary log-out-button">Logout</button>
			</div>
		</div>
	);
};

export const DashboardButton = () => {
	return (
		<div className="nav-bar-dashboard-container">
			<div className="dashboard-button-container">
				<button className="primary dashboard-button">Dashboard</button>
			</div>
		</div>
	);
};

export const NavRight: React.FC<INavBar> = ({ isLoggedIn }) => {
	// TODO: add fns to auth btns
	return (
		<div className="nav-bar-container">
			<div className="nav-bar-right">
				{isLoggedIn ? (
					<>
						<LogoutButton />
						<DashboardButton />
					</>
				) : (
					<>
						<SignUpButton />
						<LoginButton />
					</>
				)}
			</div>
		</div>
	);
};
