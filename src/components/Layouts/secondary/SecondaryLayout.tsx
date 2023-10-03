import SideBar from "../../../components/Layouts/sidebar/SideBar";
import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";
import "./SecondaryLayout.css";

export interface ISecondaryLayout {
	children: React.ReactNode;
}
const SecondaryLayout = ({ children }: ISecondaryLayout) => {
	return (
		<div className="SecondaryLayout-container">
			<SideBar
				followedChannels={jsonDataFollowing}
				recommendedChannels={jsonDataRecommended}
			/>
			<section className="content-feed">{children}</section>
		</div>
	);
};

export default SecondaryLayout;
