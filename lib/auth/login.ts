import { makeRequest } from "../utils/NEXT_fetch";

export async function handleLogin(userLoginCredentials: any) {
	try {
		const body = await makeRequest("POST", "/login", userLoginCredentials);
		// console.log("🚀 ~ handleLogin ~ body:", body);
	} catch (error) {
		console.error("Error during login:", error);
	}
}

export async function handleLogOut() {
	try {
		const body = await makeRequest("GET", "/login");
		console.log("🚀 ~ handleLogOut ~ body:", body);
	} catch (error) {
		console.error("Error during logout:", error);
	}
}
