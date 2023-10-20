import playButton from "@/assets/playButton.svg";
import pauseButton from "@/assets/pauseButton.svg";
import fullScreen from "@/assets/fullScreen.svg";
import volume from "@/assets/volume.svg";
import Image from "next/image";
import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

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
const onMute = (mediaVideoRef: HTMLVideoElement | undefined) => {};

const Button = ({
  src,
  alt,
  mediaControl,
}: {
  src: string;
  alt: string;
  mediaControl: (mediaVideoRef: HTMLVideoElement) => void;
}) => (
  <button
    id="media-player-button"
    className="opacity-80 hover:opacity-100 z-10"
    onClick={mediaControl}
  >
    <Image src={src} alt={alt} />
  </button>
);

const MediaControlsSegment = ({ children }: { children: ReactNode }) => {
  return (
    <div id="media-player-controls-segment" className="flex gap-3 z-10">
      {children}
    </div>
  );
};

const MediaPlayerControls = ({
  mediaVideoRef,
}: {
  mediaVideoRef: MutableRefObject<HTMLVideoElement | undefined>;
}) => {
  const [play, setplay] = useState(false);

  useEffect(() => {
    const video = mediaVideoRef.current as HTMLVideoElement;

    video.onplaying = () => {
      mediaVideoRef.current?.paused ? setplay(false) : setplay(true);
    };

    return () => {
      video.onplaying = null;
    };
  }, []);

  return (
    <div
      id="media-player-controls-container"
      className="absolute inset-x-0 bottom-0 z-10 opacity-0 transition-opacity ease-in-out delay-150 group-hover:opacity-100
				before:absolute before:bottom-0 before:w-full before:z-0 before:pointer-events-none before:h-32 before:opacity-70 before:bg-gradient-to-t before:from-black before:to-transparent"
    >
      <div
        id="media-player-controls"
        className="flex justify-between px-5 pb-2 z-10"
      >
        <MediaControlsSegment>
          <Button
            src={play ? pauseButton : playButton}
            alt="Play/Pause"
            mediaControl={() => onPlay(mediaVideoRef.current, setplay)}
          />

          {/* <Button src={volume} alt="Volume" /> */}
        </MediaControlsSegment>
        <MediaControlsSegment>
          <Button
            src={fullScreen}
            alt="Full Screen"
            mediaControl={() => onFullScreen(mediaVideoRef.current)}
          />
        </MediaControlsSegment>
      </div>
    </div>
  );
};

export default MediaPlayerControls;
