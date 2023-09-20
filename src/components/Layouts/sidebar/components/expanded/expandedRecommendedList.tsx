import React from "react";
import { RecommendedChannelsList } from "../../types";
import {
	EmptyChannelsList,
	PopulatedChannelsList,
} from "./displayExpandedChannelLists";

export const ExpandedRecommendedList: React.FC<RecommendedChannelsList> = ({
	recommendedChannels,
}) => {
	return (
		<div className="side-bar-expanded-recommended-users-list-container">
			{recommendedChannels && recommendedChannels.length ? (
				<PopulatedChannelsList channels={recommendedChannels} channelListTitle="RECOMMENDED CHANNELS"/>
			) : (
				<EmptyChannelsList />
			)}
		</div>
	);
};
