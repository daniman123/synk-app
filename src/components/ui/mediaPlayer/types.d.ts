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
