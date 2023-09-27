import { LOCAL_URL } from "../api_paths";

const BASE_URL = LOCAL_URL + "/api/auth";

export async function makeRequest(
	method: string,
	endpoint: string,
	requestData?: any
) {
	const requestOptions: RequestInit = {
		method: method,
		mode: "cors",
		// cache: "no-cache",
		credentials: "include",
		referrerPolicy: "origin",
		headers: {
			"Content-Type": "application/json",
		},
	};

	if (requestData) {
		requestOptions.body = JSON.stringify(requestData);
	}

	const res = await fetch(BASE_URL + endpoint, requestOptions);
	const body = await res.json();

	return body;
}
