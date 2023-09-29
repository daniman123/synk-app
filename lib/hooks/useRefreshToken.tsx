import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { getRefreshToken } from "../auth/refreshToken";

export const useRefreshToken = () => {
	const { setSession } = useAuthStore();
	const [isSessionAuth, setIsSessionAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRefreshToken = async () => {
			setIsLoading(true);

			try {
				await getRefreshToken();
				setIsSessionAuth(true);
				setSession(true);
				setError(null);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRefreshToken();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isSessionAuth, isLoading, error };
};
