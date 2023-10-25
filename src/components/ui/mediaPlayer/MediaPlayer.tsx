"use client";

import { useRef } from "react";
import MediaPlayerControls from "./components/MediaPlayerControls";

const MediaPlayer = () => {
	const mediaVideoRef = useRef<HTMLVideoElement>(null);
	return (
		<div className="h-[90%] max-lg:h-[40%] relative group">
			<video
				ref={mediaVideoRef}
				className="aspect-video h-full w-full z-0"
				// autoPlay
				src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			/>
			<MediaPlayerControls mediaVideoRef={mediaVideoRef} />
		</div>
	);
};

export default MediaPlayer;
