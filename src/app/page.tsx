"use client";
import { useEffect } from "react";
import { getRefreshToken } from "../../lib/auth/refreshToken";
// import { useAuthStore } from "@/store/authStore";

const Home = (): JSX.Element => {
	// const { setSessionToken } = useAuthStore();
	useEffect(() => {
		async function name() {
			try {
				await getRefreshToken();

				// expandSideBar();
			} catch (error) {
				// collapseSideBar();
			}
		}
		name();
	}, []);

	return <main>Homessssssssssssssssssssssssss</main>;
};

export default Home;
