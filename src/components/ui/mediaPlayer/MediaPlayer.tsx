"use client";

import { useRef } from "react";
import MediaPlayerControls from "./components/MediaPlayerControls";
import { IMediaPlayer } from "./types";

const MediaPlayer = ({ src }: IMediaPlayer) => {
	const mediaVideoRef = useRef<HTMLVideoElement>(null);
	return (
		<div className="flex justify-center relative group">
			<video
				ref={mediaVideoRef}
				src={src}
				className="aspect-video cursor-pointer rounded-sm"
			/>
			<MediaPlayerControls mediaVideoRef={mediaVideoRef} />
		</div>
	);
};

export default MediaPlayer;
