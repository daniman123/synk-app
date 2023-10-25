import MediaPlayer from "../../ui/mediaPlayer/MediaPlayer";
import MediaPlayerBanner from "../../ui/mediaPlayer/components/MediaPlayerBanner";
// import ViewerChat from "../../ui/viewerChat/ViewerChat";

const ViewerPage = () => {
	return (
		<div className="flex h-full w-full">
			<div className="block w-[calc(100%-16dvw)] max-lg:w-[calc(100%-30dvw)]">
				<MediaPlayer />
				<MediaPlayerBanner />
			</div>
			<div className="h-full w-[16dvw] max-lg:w-[30dvw] bg-slate-700">chat</div>
		</div>
	);
};

export default ViewerPage;
