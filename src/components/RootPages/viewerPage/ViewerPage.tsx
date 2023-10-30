import ViewerChat from "../../ui/viewerChat/ViewerChat";
import MediaPlayer from "../../ui/mediaPlayer/MediaPlayer";
import MediaPlayerBanner from "../../ui/mediaPlayer/components/MediaPlayerBanner";
import { IViewerPage } from "./types";

const ViewerPage = ({ mediaPlayerSrc, mediaBannerData }: IViewerPage) => {
	return (
		<div className="h-full max-sm:w-full lg:flex">
			<div className="lg:w-full">
				<MediaPlayer src={mediaPlayerSrc} />
				<MediaPlayerBanner {...mediaBannerData} />
			</div>
			<ViewerChat />
		</div>
	);
};

export default ViewerPage;
