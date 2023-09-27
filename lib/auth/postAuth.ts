import { NextRequest } from "next/server";

export async function postAuth(req: NextRequest, endpoint: string) {
	const body = await req.json();

	const requestOptions: RequestInit = {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	};

	requestOptions.body = JSON.stringify(body);

	const rest = await fetch(endpoint, requestOptions);
	const cookies = rest.headers.getSetCookie();
	const payload = await rest.json();

	const jwt = cookies[0]?.toString();
	const pay = JSON.stringify(payload);
	
	return new Response(pay, {
		status: 200,
		headers: {
			"Set-Cookie": `${jwt}; Path=/; HttpOnly;`,
		},
	});
}
