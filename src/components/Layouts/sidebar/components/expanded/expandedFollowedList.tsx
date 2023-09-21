import React from "react";
import { FollowedChannelsList } from "../../types";
import {
	EmptyChannelsList,
	PopulatedChannelsList,
} from "./displayExpandedChannelLists";

export const ExpandedFollowedList = ({
	followedChannels,
}: FollowedChannelsList) => {
	return (
		<div className="side-bar-expanded-followed-users-list-container">
			{followedChannels && followedChannels.length ? (
				<PopulatedChannelsList
					channels={followedChannels}
					channelListTitle="FOLLOWING CHANNELS"
				/>
			) : (
				<EmptyChannelsList />
			)}
		</div>
	);
};
