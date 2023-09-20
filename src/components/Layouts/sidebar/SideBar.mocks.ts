import { ISideBar } from "./types";
import jsonDataFollowing from "../../../../mockDataJson/FOLLOWED_CHANNELS_LIST_MOCK_DATA.json";
import jsonDataRecommended from "../../../../mockDataJson/RECOMMENDED_CHANNELS_LIST_MOCK_DATA.json";

const commonData = {
	followedChannels: jsonDataFollowing,
	recommendedChannels: jsonDataRecommended,
};

const base: ISideBar = {
	isExpanded: true,
	...commonData,
};

const alt: ISideBar = {
	isExpanded: false,
	...commonData,
};

export const mockSideBarProps = {
	base,
	alt,
};
