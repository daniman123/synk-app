const temp =
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const MediaPlayer = () => {
	return (
		<div className="media-player-container">
			<video src={temp} className="media-player" muted controls />
		</div>
	);
};

export default MediaPlayer;
