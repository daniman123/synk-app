import { NextRequest } from "next/server";
import { DB_URL } from "../../../../../lib/config";

export async function POST(req: NextRequest) {
	const path = DB_URL.LOGOUT;

	const cookies = req.cookies;

	const credentials = cookies.get("user_credentials");

	const requestOptions: RequestInit = {
		method: "GET",
		mode: "cors",
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"Set-Cookie": `${credentials?.name}=${credentials?.value};`,
		},
	};

	await fetch(path, requestOptions);
	const payload = JSON.stringify({ action: "user LogOut" });
	const responseHeaders = {
		"Set-Cookie": [
			"jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",
			"user_credentials=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",
		],
	};

	return new Response(payload, {
		status: 200,
		headers: responseHeaders,
	});
}
