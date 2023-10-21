import { Dispatch, SetStateAction } from "react";

const onPlay = async (
	mediaVideoRef: HTMLVideoElement | undefined,
	setplay: Dispatch<SetStateAction<boolean>>
) => {
	const isPlaying = mediaVideoRef?.paused;
	if (isPlaying) {
		await mediaVideoRef?.play();
		setplay(true);
	} else {
		mediaVideoRef?.pause();
		setplay(false);
	}
};

const onFullScreen = async (mediaVideoRef: HTMLVideoElement | undefined) => {
	await mediaVideoRef?.requestFullscreen();
};

const onMute = (mediaVideoRef: HTMLVideoElement | undefined) => {
	mediaVideoRef?.volume;
};

export { onPlay, onFullScreen, onMute };
