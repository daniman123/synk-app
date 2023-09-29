export async function handleLogOut() {
	try {
		const requestOptions: RequestInit = {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		};

		await fetch("/api/auth/logout", requestOptions);
	} catch (error) {
		console.error("Error during logout:", error);
	}
}
