import NavBar from "../../../components/Layouts/nav/NavBar";
import SideBar from "../../../components/Layouts/sidebar/SideBar";
import "./PrimaryLayout.css";
import { Inter } from "next/font/google";
import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";

const inter = Inter({ subsets: ["latin"] });

export interface PrimaryLayoutProps {
	children: React.ReactNode;
}

export default function PrimaryLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar isLoggedIn={false} />
				<SideBar
					followedChannels={jsonDataFollowing}
					recommendedChannels={jsonDataRecommended}
				/>
				{children}
			</body>
		</html>
	);
}
