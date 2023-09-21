"use client";

import { useLayoutStore } from "../../../store/layoutStore";
import "./SideBar.css";
import { ExpandedSideBar } from "./components/expanded/expandedSideBar";
import { ChannelLists } from "./types";

const SideBar = ({
	followedChannels,
	recommendedChannels,
}: ChannelLists): JSX.Element => {
	const isSideBarToggled = useLayoutStore((state) => state.sideBarToggled);

	return (
		<div
			className={`SideBar-container${
				isSideBarToggled ? " expanded" : " collapsed"
			}`}
		>
			{isSideBarToggled ? (
				<ExpandedSideBar
					followedChannels={followedChannels}
					recommendedChannels={recommendedChannels}
				/>
			) : null}
		</div>
	);
};

export default SideBar;
