import "./ViewerPage.css";
import MediaPlayer from "./components/MediaPlayer";
import MediaPlayerBanner from "./components/MediaPlayerBanner";

export interface IViewerPage {}

const ViewerPage = () => {
	return (
		<div className="ViewerPage-container">
			<div className="viewer-page-broadcast-meta-data grid-row-span-5">
				<MediaPlayer />
				<MediaPlayerBanner />
			</div>
			{/* <div className="chat grid-row-span-5">CHATTER</div> */}
		</div>
	);
};

export default ViewerPage;
