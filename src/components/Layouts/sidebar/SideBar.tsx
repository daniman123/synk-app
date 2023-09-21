import "./SideBar.css";
import { CollapsedSideBar } from "./components/collapsed/collapsedSideBar";
import { ExpandedSideBar } from "./components/expanded/expandedSideBar";
import { ISideBar } from "./types";

const SideBar = ({
	isExpanded,
	followedChannels,
	recommendedChannels,
}: ISideBar) => {
	return (
		<div
			className={`SideBar-container${isExpanded ? " expanded" : " collapsed"}`}
		>
			{isExpanded ? (
				<ExpandedSideBar
					followedChannels={followedChannels}
					recommendedChannels={recommendedChannels}
				/>
			) : (
				<CollapsedSideBar
					followedChannels={followedChannels}
					recommendedChannels={recommendedChannels}
				/>
			)}
		</div>
	);
};

export default SideBar;
