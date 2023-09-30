export const DB_URL_BASE = "http://localhost:5000";
export const DB_URL = {
	REGISTER: DB_URL_BASE + "/database-queries/create-new-user",
	LOGIN: DB_URL_BASE + "/user/login",
	LOGOUT: DB_URL_BASE + "/user/logout",
};

export const CDN_URL = "ws://127.0.0.1:9000";
export const CHAT_URL = "ws://127.0.0.1:7000";

export const config = {
	iceServers: [
		{
			urls: ["stun:stun1.1.google.com:19302", "stun:stun2.1.google.com:19302"],
		},
	],
};

export const empty_cookie_headers = {
	"Set-Cookie": [
		"jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",
		"user_credentials=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",
	] as unknown as string,
};
