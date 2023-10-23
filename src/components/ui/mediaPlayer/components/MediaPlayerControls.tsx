import playButtonImg from "@/assets/mediaControlAssets/playback/playButton.svg";
import pauseButtonImg from "@/assets/mediaControlAssets/playback/pauseButton.svg";
import fullScreen from "@/assets/mediaControlAssets/screenSize/fullScreen.svg";
import {
	handleMediaFullscreen,
	handleMediaPlayback,
} from "../mediaControlsUtils";
import { IMediaPlayerControls, IplayState } from "../types";
import MediaControlsSegment from "./MediaControlsSegment";
import { useVideoPlayState } from "../hooks";
import { VolumeControl } from "./VolumeControl";
import { MediaControlButton } from "./MediaControlButton";

export const MediaControlsSegments = ({
	playState: { isPlaying, mute, setIsPlaying, setVolume, volume },
	mediaVideoRef,
}: IplayState) => {
	return (
		<>
			<MediaControlsSegment>
				<MediaControlButton
					icon={isPlaying ? pauseButtonImg : playButtonImg}
					altText="Play/Pause"
					onClick={() =>
						handleMediaPlayback(mediaVideoRef.current, setIsPlaying)
					}
				/>
				<VolumeControl
					mediaVideoRef={mediaVideoRef}
					mute={mute}
					setVolume={setVolume}
					volume={volume}
				/>
			</MediaControlsSegment>
			<MediaControlsSegment>
				<MediaControlButton
					icon={fullScreen}
					altText="Full Screen"
					onClick={() => handleMediaFullscreen(mediaVideoRef.current)}
				/>
			</MediaControlsSegment>
		</>
	);
};

const MediaPlayerControls = ({ mediaVideoRef }: IMediaPlayerControls) => {
	const playState = useVideoPlayState(mediaVideoRef);

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
				<MediaControlsSegments
					playState={playState}
					mediaVideoRef={mediaVideoRef}
				/>
			</div>
		</div>
	);
};

export default MediaPlayerControls;
