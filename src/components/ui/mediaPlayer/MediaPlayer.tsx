"use client";

import { useRef } from "react";
import MediaPlayerControls from "./components/MediaPlayerControls";

const MediaPlayer = () => {
	const mediaVideoRef = useRef<HTMLVideoElement>(null);
	return (
		<div id="media-player-container" className="relative group">
			<MediaPlayerControls mediaVideoRef={mediaVideoRef} />
			<video
				ref={mediaVideoRef}
				src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				id="media-player"
				className="object-cover bg-white w-full"
				controls={false}
				// muted
				// autoPlay
			/>
		</div>
	);
};

export default MediaPlayer;
