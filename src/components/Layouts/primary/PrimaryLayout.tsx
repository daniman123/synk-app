import NavBar from "../../../components/Layouts/nav/NavBar";
import SideBar from "../../../components/Layouts/sidebar/SideBar";
import "./PrimaryLayout.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";
import { useLayoutStore } from "../../../store/layoutStore";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Synk",
	description: "Live Streaming website",
};

export interface PrimaryLayoutProps {
	children: ReactNode;
}

export default function PrimaryLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);

	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar isLoggedIn={false} />
				<SideBar
					isExpanded={isSideBarToggled}
					followedChannels={jsonDataFollowing}
					recommendedChannels={jsonDataRecommended}
				/>
				{children}
			</body>
		</html>
	);
}
