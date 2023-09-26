export const DB_URL = "http://localhost:5000";
export const CDN_URL = "ws://127.0.0.1:9000";
export const CHAT_URL = "ws://127.0.0.1:7000";

export const config = {
	iceServers: [
		{
			urls: ["stun:stun1.1.google.com:19302", "stun:stun2.1.google.com:19302"],
		},
	],
};
