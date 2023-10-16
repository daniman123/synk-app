import "./ViewerPage.css";
import MediaPlayer from "./components/MediaPlayer";

export interface IViewerPage {}

const ViewerPage = () => {
	return (
		<div className="ViewerPage-container">
			<div className="viewer-page-broadcast-meta-data grid-row-span-5">
				<MediaPlayer />
				<div className="media-player-banner">BANNER</div>
			</div>
			<div className="chat grid-row-span-5">CHATTER</div>
		</div>
	);
};

export default ViewerPage;
