import React from "react";
import { RecommendedChannelsList } from "../../types";
import {
	EmptyChannelsList,
	PopulatedChannelsList,
} from "./displayExpandedChannelLists";

export const ExpandedRecommendedList = ({
	recommendedChannels,
}: RecommendedChannelsList): JSX.Element => {
	return (
		<div className="side-bar-expanded-recommended-users-list-container">
			{recommendedChannels && recommendedChannels.length ? (
				<PopulatedChannelsList
					channels={recommendedChannels}
					channelListTitle="RECOMMENDED CHANNELS"
					defaultDisplay={3}
				/>
			) : (
				<EmptyChannelsList />
			)}
		</div>
	);
};
