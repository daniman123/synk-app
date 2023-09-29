"use client";

import Link from "next/link";
import { useRefreshToken } from "../../../../../lib/hooks/useRefreshToken";
import { handleLogOut } from "../../../../../lib/auth/logout";

export const LoginButton = (): JSX.Element => {
	return (
		<div className="nav-bar-log-in-container">
			<div className="log-in-button-container">
				<Link href={"/auth/login"}>
					<button className="primary log-in-button">Login</button>
				</Link>
			</div>
		</div>
	);
};

export const SignUpButton = (): JSX.Element => {
	return (
		<div className="nav-bar-sign-up-container">
			<div className="sign-up-button-container">
				<Link href={"/auth/signup"}>
					<button className="primary sign-up-button">Sign up</button>
				</Link>
			</div>
		</div>
	);
};

export const LogoutButton = (): JSX.Element => {
	const handleClick = async () => {
		await handleLogOut();
	};

	return (
		<div className="nav-bar-log-out-container">
			<div className="log-out-button-container">
				<button className="primary log-out-button" onClick={handleClick}>
					Logout
				</button>
			</div>
		</div>
	);
};

export const DashboardButton = (): JSX.Element => {
	return (
		<div className="nav-bar-dashboard-container">
			<div className="dashboard-button-container">
				<button className="primary dashboard-button">Dashboard</button>
			</div>
		</div>
	);
};

export const NavRight = (): JSX.Element => {
	const { isSessionAuth, isLoading, error } = useRefreshToken();

	return (
		<div className="nav-bar-container">
			<div className="nav-bar-right">
				{isSessionAuth && !isLoading && !error ? (
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
