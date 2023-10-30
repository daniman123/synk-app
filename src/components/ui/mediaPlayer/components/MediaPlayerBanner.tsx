import LiveViewCount from "../../liveViewCount/LiveViewCount";
import ProfilePicture from "../../profilePicture/ProfilePicture";
import { IMediaPlayerBanner } from "../types";

const MediaPlayerBanner = ({
	category,
	pfpSrc,
	title,
	userName,
	viewCount,
}: IMediaPlayerBanner) => {
	return (
		<div
			id="videoBanner"
			className="flex justify-between rounded-sm 
											pb-2"
		>
			<div className="flex justify-center items-center w-1/5">
				<ProfilePicture src={pfpSrc} alt="" height="h-[75%]" />
			</div>
			<div className="w-2/3 pl-5">
				<p className="truncate text-base">{userName}</p>
				<p className="truncate text-sm">{title}</p>
				<p className="truncate text-xs">{category}</p>
			</div>
			<div className="flex items-center justify-center w-1/6">
				<LiveViewCount
					viewCount={viewCount}
					height="h-5"
					width="w-full"
					fontSize="text-sm"
					onAirSymbolheight="h-2"
					onAirSymbolwidth="w-2"
				/>
			</div>
		</div>
	);
};

export default MediaPlayerBanner;
