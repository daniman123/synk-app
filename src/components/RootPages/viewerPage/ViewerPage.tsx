import MediaPlayer from "./components/MediaPlayer";
import MediaPlayerBanner from "./components/MediaPlayerBanner";
import ViewerChat from "./components/ViewerChat";

export interface IViewerPage {}

const ViewerPage = () => {
	return (
		<div
			className="grid grid-rows-5"
			style={{ gridTemplateColumns: "1280px calc(1640px - 1280px)" }}
		>
			<div
				className="grid col-span-1 row-span-full"
				style={{
					width: "1280px",
					gridTemplateRows: "720px 808px",
					// gridTemplateRows: "720px calc(880px - 720px)",
				}}
			>
				<MediaPlayer />
				<MediaPlayerBanner />
			</div>
			<div className="col-span-1 sticky" style={{ top: "51px" }}>
				<ViewerChat />
			</div>
		</div>
	);
};

export default ViewerPage;
