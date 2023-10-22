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