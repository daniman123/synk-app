import MediaPlayer from "../../ui/mediaPlayer/MediaPlayer";
import MediaPlayerBanner from "../../ui/mediaPlayer/components/MediaPlayerBanner";
import ViewerChat from "./components/ViewerChat";

export interface IViewerPage {}

const ViewerPage = () => {
	return (
		<div
			className="grid grid-rows-5"
			style={{
				gridTemplateColumns: "1280px calc(1640px - 1280px)",
			}}
		>
			<div
				className="grid col-span-1 row-span-full w-[1280px]"
				style={{
					gridTemplateRows: "720px 880px",
				}}
			>
				<MediaPlayer />
				<div>
					<MediaPlayerBanner />
				</div>
			</div>
			<div className="col-span-1 sticky top-[51px]">
				<ViewerChat />
			</div>
		</div>
	);
};

export default ViewerPage;
