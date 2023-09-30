import { NextRequest } from "next/server";
import { DB_URL, empty_cookie_headers } from "../../../../../lib/config";

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
	const payload = JSON.stringify({ action: "user logged out" });

	return new Response(payload, {
		status: 200,
		headers: empty_cookie_headers,
	});
}
