import { MutableRefObject, useEffect, useState } from "react";

export const useVideoPlayState = (
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>
) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState<number | undefined>(1);
	const [mute, setMute] = useState<boolean | undefined>(false);
	// const [isFullScreen, setisFullScreen] = useState(false);

	useEffect(() => {
		const video = mediaVideoRef.current as HTMLVideoElement;
		video.onplaying = () => {
			mediaVideoRef.current?.paused ? setIsPlaying(false) : setIsPlaying(true);
			setVolume(video.volume);
			setMute(video.muted);
		};

		video.onvolumechange = () => {
			let currentVolume = video.volume;
			setVolume(currentVolume);
			if (currentVolume == 0 || video.muted) {
				setMute(true);
			} else {
				setMute(false);
			}
		};

		return () => {
			video.onplaying = null;
			video.onvolumechange = null;
		};
	}, [mediaVideoRef]);

	useEffect(() => {
		const video = mediaVideoRef.current as HTMLVideoElement;
		video.volume = volume as number;
		if (video.volume != 0 || video.muted) {
			video.muted = false;
			setMute(false);
		}
	}, [mediaVideoRef, volume]);

	return { isPlaying, setIsPlaying, volume, setVolume, mute, setMute };
};
