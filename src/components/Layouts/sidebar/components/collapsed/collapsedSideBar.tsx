import React from "react";
import { ChannelLists } from "../../types";

export const CollapsedSideBar = ({
	followedChannels,
	recommendedChannels,
}: ChannelLists): JSX.Element => {
	console.log(followedChannels, recommendedChannels);
	return <div className="side-bar-collapsed-container"></div>;
};
