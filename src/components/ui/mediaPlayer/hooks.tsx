import { MutableRefObject, useEffect, useState } from "react";

export const useVideoPlayState = (
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>
) => {
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const video = mediaVideoRef.current as HTMLVideoElement;

		video.onplaying = () => {
			mediaVideoRef.current?.paused ? setIsPlaying(false) : setIsPlaying(true);
		};

		return () => {
			video.onplaying = null;
		};
	}, [mediaVideoRef]);

	return { isPlaying, setIsPlaying };
};
