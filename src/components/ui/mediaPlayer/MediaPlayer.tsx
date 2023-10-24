"use client";

import { useRef } from "react";
import MediaPlayerControls from "./components/MediaPlayerControls";

const MediaPlayer = () => {
	const mediaVideoRef = useRef<HTMLVideoElement>(null);
	return (
		<div id="media-player-container" className="max-h-screen relative group">
			<video
				className="w-full aspect-video h-full max-h-screen object-cover bg-white z-0"
				ref={mediaVideoRef}
				src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				id="media-player"
				// autoPlay
			/>
			<MediaPlayerControls mediaVideoRef={mediaVideoRef} />
		</div>
	);
};

export default MediaPlayer;
