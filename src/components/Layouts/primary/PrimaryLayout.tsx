import NavBar from "../../../components/Layouts/nav/NavBar";
import SideBar from "../../../components/Layouts/sidebar/SideBar";
import "./PrimaryLayout.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Synk",
	description: "Live Streaming website",
};

export default function PrimaryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar isLoggedIn={false} />
				<SideBar
					isExpanded={true}
					followedChannels={jsonDataFollowing}
					recommendedChannels={jsonDataRecommended}
				/>
				{children}
			</body>
		</html>
	);
}
