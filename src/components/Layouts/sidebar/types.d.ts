export interface ChannelListElement {
	id: string;
	userName: string;
	viewers: number;
	profilePicture: string;
	isLive: boolean;
	category: string;
}

export interface ChannelsList {
	channels: ChannelListElement[];
	channelListTitle: string;
	defaultDisplay: number;
}

export interface FollowedChannelsList {
	followedChannels: ChannelListElement[] | null;
}
export interface RecommendedChannelsList {
	recommendedChannels: ChannelListElement[] | null;
}

export interface ChannelLists {
	followedChannels: ChannelListElement[] | null;
	recommendedChannels: ChannelListElement[] | null;
}

export interface ISideBar extends ChannelLists {
	isExpanded: boolean;
}
