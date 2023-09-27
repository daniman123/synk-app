"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { getRefreshToken } from "../../../../../lib/auth/refreshToken";

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
	return (
		<div className="nav-bar-log-out-container">
			<div className="log-out-button-container">
				<button className="primary log-out-button">Logout</button>
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
	// TODO: add fns to auth btns
	const [IsLoggedIn, setIsLoggedIn] = useState(false);
	const { setSessionToken } = useAuthStore();
	const userToken = useAuthStore((state) => state.userToken);

	useEffect(() => {
		async function name() {
			try {
				const response = await getRefreshToken();
				const token = response.access_token;
				setSessionToken(token);
				setIsLoggedIn(true);
			} catch (error) {
				setIsLoggedIn(false);
			}
		}
		name();
	}, []);

	return (
		<div className="nav-bar-container">
			<div className="nav-bar-right">
				{IsLoggedIn || userToken ? (
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
