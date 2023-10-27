export interface IMediaPlayerControls {
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>;
}

export interface IMediaControlsSegment {
	children: ReactNode;
}

export interface IMediaControlButton {
	icon: any;
	altText: string;
	onClick: () => Promise<void> | void;
}

export interface IVolumeControl {
	volume: number | undefined;
	setVolume: (volume: number) => void;
	mute: boolean | undefined;
	mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>;
}

export interface IMediaControlsSegments {
	isPlaying: boolean;
	setIsPlaying: Dispatch<SetStateAction<boolean>>;
	mute: boolean | undefined;
	setVolume: Dispatch<SetStateAction<number | undefined>>;
	volume: number | undefined;
}

export interface IplayState {
	playState: IMediaControlsSegments;
	mediaVideoRef: MutableRefObject<HTMLVideoElement>;
}

export interface IMediaPlayer {
	src: string;
}

export interface IMediaPlayerBanner {
	pfpSrc: string;
	userName: string;
	title: string;
	category: string;
	viewCount: number;
}