import { IMediaControlsSegment } from "../types";

const MediaControlsSegment = ({ children }: IMediaControlsSegment) => (
	<div id="media-player-controls-segment" className="flex gap-1 z-10">
		{children}
	</div>
);

export default MediaControlsSegment;
