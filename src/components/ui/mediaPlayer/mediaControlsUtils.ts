import { SetStateAction, useState } from "react";
import volumeHighImg from "@/assets/mediaControlAssets/volume/volumeHigh.svg";
import volumeLowImg from "@/assets/mediaControlAssets/volume/volumeLow.svg";
import volumeMuteImg from "@/assets/mediaControlAssets/volume/volumeMute.svg";

export const initMediaPlayer = (
	video: HTMLVideoElement,
	setVolume: (value: SetStateAction<number | undefined>) => void,
	setMute: (value: SetStateAction<boolean | undefined>) => void,
	setIsPlaying: (value: SetStateAction<boolean>) => void
) => {
	setIsPlaying(!video?.paused);
	setVolume(video.volume);
	setMute(video?.volume === 0 || video?.muted);
};

export const handleMediaKeys = async (
	e: KeyboardEvent,
	video: HTMLVideoElement,
	setIsPlaying: (value: SetStateAction<boolean>) => void
) => {
	switch (e.key) {
		case "f":
			handleMediaFullscreen(video);
			break;
		case "m":
			handleMute(video);
			break;
		case "k":
			await handleMediaPlayback(video, setIsPlaying);
			break;
	}
};

export const handleMute = (video: HTMLVideoElement | undefined) => {
	if (video) {
		video.muted = !video.muted;
	}
};

export const handleVolumeChange = (
	setVolume: (value: SetStateAction<number | undefined>) => void,
	video: HTMLVideoElement,
	setMute: (value: SetStateAction<boolean | undefined>) => void
) => {
	let currentVolume = video.volume;
	setVolume(currentVolume);
	if (currentVolume == 0 || video.muted) {
		setMute(true);
	} else {
		setMute(false);
	}
};

export const getVolumeIcon = (
	volume: number | undefined,
	mute: boolean | undefined
) => {
	if (mute || volume === 0) return volumeMuteImg;
	if (volume && volume >= 0.5) return volumeHighImg;
	return volumeLowImg;
};

export const handleMediaFullscreen = (video: HTMLVideoElement) => {
	if (!document.fullscreenElement) {
		video.parentElement?.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
};

export const handleMediaPlayback = async (
	video: HTMLVideoElement,
	setIsPlaying: (value: SetStateAction<boolean>) => void
) => {
	if (!video.paused) {
		video.pause();
		setIsPlaying(false);
	} else {
		await video.play();
		setIsPlaying(true);
	}
};

export const addEventListeners = (
	video: HTMLVideoElement,
	handlers: {
		handlePlaying: () => void;
		handleVolume: () => void;
		handleDblClick: () => void;
		handleClick: () => void;
		handleKeyDown: (e: KeyboardEvent) => void;
	}
) => {
	video.addEventListener("playing", handlers.handlePlaying);
	video.addEventListener("volumechange", handlers.handleVolume);
	video.addEventListener("dblclick", handlers.handleDblClick);
	video.addEventListener("click", handlers.handleClick);
	document.addEventListener("keydown", handlers.handleKeyDown);
};

export const removeEventListeners = (
	video: HTMLVideoElement,
	handlers: {
		handlePlaying: () => void;
		handleVolume: () => void;
		handleDblClick: () => void;
		handleClick: () => void;
		handleKeyDown: (e: KeyboardEvent) => void;
	}
) => {
	video.removeEventListener("playing", handlers.handlePlaying);
	video.removeEventListener("volumechange", handlers.handleVolume);
	video.removeEventListener("dblclick", handlers.handleDblClick);
	video.removeEventListener("click", handlers.handleClick);
	document.removeEventListener("keydown", handlers.handleKeyDown);
};

export const bundleEventHandlers = (
	video: HTMLVideoElement,
	setVolume: any,
	setMute: any,
	setIsPlaying: any
) => {
	return {
		handlePlaying: () =>
			initMediaPlayer(video, setVolume, setMute, setIsPlaying),
		handleVolume: () => handleVolumeChange(setVolume, video, setMute),
		handleDblClick: () => handleMediaFullscreen(video),
		handleClick: () => handleMediaPlayback(video, setIsPlaying),
		handleKeyDown: (e: KeyboardEvent) =>
			handleMediaKeys(e, video, setIsPlaying),
	};
};

export const useVideoStates = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState<number | undefined>(1);
	const [mute, setMute] = useState<boolean | undefined>(false);

	return { isPlaying, setIsPlaying, volume, setVolume, mute, setMute };
};
