// import NavBar from "../components/Layouts/nav/NavBar";
// import SideBar from "../components/Layouts/sidebar/SideBar";
import "../components/Layouts/primary/PrimaryLayout.css";
import { Inter } from "next/font/google";
// import jsonDataFollowing from "../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
// import jsonDataRecommended from "../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";
import PrimaryLayout from "@/components/Layouts/primary/PrimaryLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<PrimaryLayout>{children}</PrimaryLayout>
				{/* <NavBar isLoggedIn={false} />
				<SideBar
					followedChannels={jsonDataFollowing}
					recommendedChannels={jsonDataRecommended}
				/>
				{children} */}
			</body>
		</html>
	);
}
