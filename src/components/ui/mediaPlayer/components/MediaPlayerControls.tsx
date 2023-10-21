import playButtonImg from "@/assets/playButton.svg";
import pauseButtonImg from "@/assets/pauseButton.svg";
import fullScreen from "@/assets/fullScreen.svg";
import volumeImg from "@/assets/volume.svg";
import Image from "next/image";
import Button from "../../button/Button";
import { onFullScreen, onMute, onPlay } from "../mediaControlsUtils";
import { IMediaControlButton, IMediaPlayerControls } from "../types";
import MediaControlsSegment from "./MediaControlsSegment";
import { useVideoPlayState } from "../hooks";

const MediaControlButton = ({
	icon,
	altText,
	onClick,
}: IMediaControlButton) => (
	<Button buttonClickFn={onClick}>
		<Image src={icon} alt={altText} />
	</Button>
);

const MediaPlayerControls = ({ mediaVideoRef }: IMediaPlayerControls) => {
	const { isPlaying, setIsPlaying } = useVideoPlayState(mediaVideoRef);

	return (
		<div
			id="media-player-controls-container"
			className="absolute inset-x-0 bottom-0 z-10 opacity-0 transition-opacity ease-in-out delay-150 group-hover:opacity-100
				before:absolute before:bottom-0 before:w-full before:z-0 before:pointer-events-none before:h-32 before:opacity-70 before:bg-gradient-to-t before:from-black before:to-transparent"
		>
			<div
				id="media-player-controls"
				className="flex justify-between px-5 pb-2 z-10"
			>
				<MediaControlsSegment>
					<MediaControlButton
						icon={isPlaying ? pauseButtonImg : playButtonImg}
						altText="Play/Pause"
						onClick={() => onPlay(mediaVideoRef.current, setIsPlaying)}
					/>
					<MediaControlButton
						icon={volumeImg}
						altText="Volume"
						onClick={() => onMute(mediaVideoRef.current)}
					/>
				</MediaControlsSegment>
				<MediaControlsSegment>
					<MediaControlButton
						icon={fullScreen}
						altText="Full Screen"
						onClick={() => onFullScreen(mediaVideoRef.current)}
					/>
				</MediaControlsSegment>
			</div>
		</div>
	);
};

export default MediaPlayerControls;
