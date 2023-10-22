import { IVolumeControl } from "../types";
import { MediaControlButton } from "./MediaControlButton";
import { getVolumeIcon, handleMute } from "../mediaControlsUtils";

export const VolumeControl = ({
	volume,
	setVolume,
	mute,
	mediaVideoRef,
}: IVolumeControl) => (
	<>
		<MediaControlButton
			icon={getVolumeIcon(volume, mute)}
			altText="Volume"
			onClick={() => handleMute(mediaVideoRef.current)}
		/>
		<input
			type="range"
			name="volume"
			id="mediaVolume"
			min={0}
			max={1}
			step="any"
			value={mute ? 0 : volume}
			onChange={(e) => setVolume(parseFloat(e.target.value))}
		/>
	</>
);
