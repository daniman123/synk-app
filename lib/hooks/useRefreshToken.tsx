import { useState, useEffect } from "react";
import { DB_URL_BASE } from "../config";
import { useAuthStore } from "@/store/authStore";

export const useRefreshToken = () => {
	const { setSessionToken } = useAuthStore();
	const [refreshToken, setRefreshToken] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRefreshToken = async () => {
			setIsLoading(true);

			try {
				const res = await fetch(DB_URL_BASE + "/user/protected", {
					method: "GET",
					mode: "cors",
					credentials: "include",
				});

				if (!res.ok) {
					throw new Error("Failed to fetch refresh token");
				}

				const data = await res.json();
				console.log("🚀 ~ file: useRefreshToken.tsx:27 ~ fetchRefreshToken ~ data:", data)

				// setRefreshToken(data); // Assuming your refresh token is in the response data.
                // setSessionToken(data)
                setError(null);
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRefreshToken();
	}, []);

	return { refreshToken, isLoading, error };
};
