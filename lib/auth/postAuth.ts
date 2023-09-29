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
	const credentials = cookies[0]?.toString();
	const searchString = "user_credentials=";
	const startIndex = credentials.indexOf(searchString);

	if (startIndex !== -1) {
		const result = credentials.substring(startIndex);
		console.log(result);
		const pay = JSON.stringify(payload);

		const responseHeaders = {
			"Set-Cookie": [`${jwt}; Path=/; HttpOnly;`, `${result};`],
		};

		return new Response(pay, {
			status: 200,
			headers: responseHeaders,
		});
	}
}
