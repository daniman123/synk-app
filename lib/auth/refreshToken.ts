import { DB_URL_BASE } from "../config";

export const getRefreshToken = async () => {
	const res = await fetch(DB_URL_BASE + "/user/protected", {
		method: "GET",
		mode: "cors",
		credentials: "include",
	});

	const response = await res.json();
	return response;
};
