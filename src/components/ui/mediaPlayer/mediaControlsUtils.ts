import { SetStateAction, useState } from "react";
import volumeHighImg from "@/assets/mediaControlAssets/volume/volumeHigh.svg";
import volumeLowImg from "@/assets/mediaControlAssets/volume/volumeLow.svg";
import volumeMuteImg from "@/assets/mediaControlAssets/volume/volumeMute.svg";

export const useVideoStates = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState<number | undefined>(1);
	const [mute, setMute] = useState<boolean | undefined>(false);

	return { isPlaying, setIsPlaying, volume, setVolume, mute, setMute };
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

export const initMediaPlayer = (
	{ paused, volume, muted }: HTMLVideoElement,
	setVolume: (value: SetStateAction<number | undefined>) => void,
	setMute: (value: SetStateAction<boolean | undefined>) => void,
	setIsPlaying: (value: SetStateAction<boolean>) => void
) => {
	setIsPlaying(!paused);
	setVolume(volume);
	setMute(volume === 0 || muted);
};

export const handleMediaKeys = async (
	e: KeyboardEvent,
	video: HTMLVideoElement,
	setIsPlaying: (value: SetStateAction<boolean>) => void
) => {
	const actions = {
		f: () => handleMediaFullscreen(video),
		m: () => handleMute(video),
		k: () => handleMediaPlayback(video, setIsPlaying),
	};

	actions[e.key as "f" | "m" | "k"]?.();
};

export const handleMute = (video: HTMLVideoElement | undefined) => {
	if (video) {
		video.muted = !video.muted;
	}
};
export const handleVolumeChange = (
	setVolume: (value: SetStateAction<number | undefined>) => void,
	{ volume, muted }: HTMLVideoElement,
	setMute: (value: SetStateAction<boolean | undefined>) => void
) => {
	setVolume(volume);
	setMute(volume === 0 || muted);
};

export const getVolumeIcon = (
	volume: number | undefined,
	mute: boolean | undefined
) => {
	if (mute || volume === 0) return volumeMuteImg;
	return volume && volume >= 0.5 ? volumeHighImg : volumeLowImg;
};

export const handleMediaFullscreen = ({ parentElement }: HTMLVideoElement) => {
	document.fullscreenElement
		? document.exitFullscreen()
		: parentElement?.requestFullscreen();
};

export const handleMediaPlayback = async (
	video: HTMLVideoElement,
	setIsPlaying: (value: SetStateAction<boolean>) => void
) => {
	video.paused ? await video.play() : video.pause();
	setIsPlaying(!video.paused);
};

type MediaHandlers = {
	handlePlaying?: (ev: Event) => void;
	handleVolume?: (ev: Event) => void;
	handleDblClick?: (ev: MouseEvent) => void;
	handleClick?: (ev: MouseEvent) => void;
	handleKeyDown?: (ev: KeyboardEvent) => void;
};

const manageEventListeners = (
	video: HTMLVideoElement,
	handlers: MediaHandlers,
	action: "add" | "remove"
) => {
	const method = action === "add" ? "addEventListener" : "removeEventListener";

	const eventMapping: Record<string, any> = {
		playing: handlers.handlePlaying,
		volumechange: handlers.handleVolume,
		dblclick: handlers.handleDblClick,
		click: handlers.handleClick,
		keydown: handlers.handleKeyDown,
	};

	for (let [event, handler] of Object.entries(eventMapping)) {
		if (handler) {
			if (event === "keydown") {
				document[method](event as any, handler as any);
			} else {
				video[method](event as any, handler as any);
			}
		}
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
) => manageEventListeners(video, handlers, "add");

export const removeEventListeners = (
	video: HTMLVideoElement,
	handlers: {
		handlePlaying: () => void;
		handleVolume: () => void;
		handleDblClick: () => void;
		handleClick: () => void;
		handleKeyDown: (e: KeyboardEvent) => void;
	}
) => manageEventListeners(video, handlers, "remove");
