import { MutableRefObject, useEffect } from "react";
import {
	addEventListeners,
	bundleEventHandlers,
	handleMute,
	removeEventListeners,
	useVideoStates,
} from "./mediaControlsUtils";

const useVideoEventListeners = (
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>,
	setIsPlaying: any,
	setVolume: any,
	setMute: any
) => {
	useEffect(() => {
		const video = mediaVideoRef.current;
		if (!video) return;

		const handlers = bundleEventHandlers(
			video,
			setVolume,
			setMute,
			setIsPlaying
		);

		addEventListeners(video, handlers);

		return () => removeEventListeners(video, handlers);
	}, [mediaVideoRef, setIsPlaying, setVolume, setMute]);
};

export const useVolumeHook = (
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>,
	volume: number | undefined
) => {
	useEffect(() => {
		const video = mediaVideoRef.current;
		if (video) {
			video.volume = volume as number;
			if (video.volume !== 0 || video.muted) {
				handleMute(video);
			}
		}
	}, [mediaVideoRef, volume]);
};

export const useVideoPlayState = (
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>
) => {
	const { isPlaying, setIsPlaying, volume, setVolume, mute, setMute } =
		useVideoStates();

	useVideoEventListeners(mediaVideoRef, setIsPlaying, setVolume, setMute);

	useVolumeHook(mediaVideoRef, volume);

	return { isPlaying, setIsPlaying, volume, setVolume, mute, setMute };
};
