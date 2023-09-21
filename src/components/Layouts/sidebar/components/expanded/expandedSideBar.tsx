import React from "react";
import { ExpandedActionButtons } from "./expandedActionButtons";
import { ChannelLists } from "../../types";
import { ExpandedFollowedList } from "./expandedFollowedList";
import { ExpandedRecommendedList } from "./expandedRecommendedList";

export const ExpandedSideBar = ({
	followedChannels,
	recommendedChannels,
}: ChannelLists) => {
	return (
		<div className="side-bar-expanded-container">
			<div className="side-bar-expanded-content-containers-wrapper">
				<ExpandedActionButtons />
				<ExpandedFollowedList followedChannels={followedChannels} />
				<ExpandedRecommendedList recommendedChannels={recommendedChannels} />
			</div>
		</div>
	);
};
