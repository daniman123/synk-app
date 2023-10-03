import { IPostRequestData } from "../utils/NEXT_fetch";
import { NextRequest } from "next/server";

export async function postAuth(
	req: NextRequest,
	endpoint: string
): Promise<Response> {
	const body: IPostRequestData = await req.json();

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

	const serverResponse = await fetch(endpoint, requestOptions);
	const serverCookies = serverResponse.headers.getSetCookie();
	const cookies = serverCookies[0]?.toString();

	const payload = await serverResponse.json();
	const pay = JSON.stringify(payload);

	const searchString = "user_credentials=";
	const startIndex = cookies?.indexOf(searchString) as number;

	if (startIndex !== -1) {
		const result = cookies?.substring(startIndex);

		const responseHeaders: HeadersInit = {
			"Set-Cookie": [
				`${cookies}; Path=/; HttpOnly;`,
				`${result};`,
			] as unknown as string,
		};

		return new Response(pay, {
			status: 200,
			headers: responseHeaders,
		});
	}

	return new Response(pay, {
		status: 400,
	});
}
