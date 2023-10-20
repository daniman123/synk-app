import Image from "next/image";
import playButton from "@/assets/playButton.svg";
import fullScreen from "@/assets/fullScreen.svg";
import volume from "@/assets/volume.svg";

const Button = ({ src, alt }: { src: string; alt: string }) => (
	<button
		id="media-player-button"
		className="opacity-80 hover:opacity-100 z-10"
	>
		<Image src={src} alt={alt} />
	</button>
);

const MediaPlayer = () => {
	return (
		<div id="media-player-container" className="relative group">
			<div
				id="media-player-controls-container"
				className="absolute inset-x-0 bottom-0 z-10 opacity-0 transition-opacity ease-in-out delay-150 group-hover:opacity-100
							before:absolute before:bottom-0 before:w-full before:z-0 before:pointer-events-none before:h-32 before:opacity-70 before:bg-gradient-to-t before:from-black before:to-transparent"
			>
				<div
					id="media-player-controls"
					className="flex justify-between px-5 pb-2 z-10"
				>
					<div id="media-player-controls-left" className="flex gap-3 z-10">
						<Button src={playButton} alt="Play/Pause" />
						<Button src={volume} alt="Volume" />
					</div>
					<div id="media-player-controls-right" className="flex gap-3 z-10">
						<Button src={fullScreen} alt="Full Screen" />
					</div>
				</div>
			</div>
			<video
				src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				id="media-player"
				className="object-cover bg-white w-full"
				muted
			/>
		</div>
	);
};

export default MediaPlayer;
