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
											max-sm:pb-2"
		>
			<div className="flex justify-center items-center max-sm:w-1/5">
				<ProfilePicture src={pfpSrc} alt="" height="max-sm:h-[75%]" />
			</div>
			<div className="max-sm:w-2/3 max-sm:pl-5">
				<p className="truncate max-sm:text-base">{userName}</p>
				<p className="truncate max-sm:text-sm">{title}</p>
				<p className="truncate max-sm:text-xs">{category}</p>
			</div>
			<div className="flex items-center justify-center max-sm:w-1/6">
				<LiveViewCount
					viewCount={viewCount}
					height="max-sm:h-5"
					width="max-sm:w-full"
					fontSize="max-sm:text-sm"
					onAirSymbolheight="max-sm:h-2"
					onAirSymbolwidth="max-sm:w-2"
				/>
			</div>
		</div>
	);
};

export default MediaPlayerBanner;
