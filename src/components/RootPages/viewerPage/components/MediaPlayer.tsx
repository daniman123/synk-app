const temp =
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

import playButton from "@/assets/playButton.svg";
import fullScreen from "@/assets/fullScreen.svg";
import volume from "@/assets/volume.svg";
import Image from "next/image";

const MediaPlayer = () => {
	return (
		<div className="media-player-container">
			<div className="media-player-controls-container">
				<div className="media-player-controls">
					<div className="media-player-controls left">
						<button className="media-player-button play clear cursor-pointer">
							<Image src={playButton} alt="" />
						</button>
						<button className="media-player-button volume clear cursor-pointer">
							<Image src={volume} alt="" />
						</button>
					</div>
					<div className="media-player-controls right">
						<button className="media-player-button full-screen clear cursor-pointer">
							<Image src={fullScreen} alt="" />
						</button>
					</div>
				</div>
			</div>
			<video src={temp} className="media-player" muted />
		</div>
	);
};

export default MediaPlayer;
