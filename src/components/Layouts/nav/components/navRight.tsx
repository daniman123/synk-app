"use client";

import Link from "next/link";
import { useRefreshToken } from "../../../../../lib/hooks/useRefreshToken";
import { handleLogOut } from "../../../../../lib/auth/logout";

export const NavRight = (): JSX.Element => {
	const { isSessionAuth, isLoading, error } = useRefreshToken();

	return (
		<>
			{isSessionAuth && !isLoading && !error ? (
				<>
					<button
						className="text-sm opacity-95 hover:opacity-100 hover:underline-offset-1"
						onClick={handleLogOut}
					>
						Logout
					</button>
					<button className="text-sm opacity-95 hover:opacity-100">User</button>
				</>
			) : (
				<>
					<Link href={"/auth/signup"}>
						<button className="text-sm opacity-95 hover:opacity-100 hover:underline hover:underline-offset-8 ">
							Sign up
						</button>
					</Link>
					<Link href={"/auth/login"}>
						<button className="text-sm opacity-95 hover:opacity-100 hover:underline hover:underline-offset-8">
							Login
						</button>
					</Link>
				</>
			)}
		</>
	);
};
