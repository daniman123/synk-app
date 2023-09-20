import React from "react";
import { ChannelLists } from "../../types";

export const CollapsedSideBar: React.FC<ChannelLists> = ({
	followedChannels,
	recommendedChannels,
}) => {
	console.log(followedChannels, recommendedChannels);
	return <div className="side-bar-collapsed-container"></div>;
};
