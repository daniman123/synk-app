"use client";

import { useRef } from "react";
import MediaPlayerControls from "./MediaPlayerControls";

const MediaPlayer = () => {
  const mediaVideoRef = useRef<HTMLVideoElement | undefined>();

  return (
    <div id="media-player-container" className="relative group">
      <MediaPlayerControls mediaVideoRef={mediaVideoRef} />
      <video
        ref={mediaVideoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        id="media-player"
        className="object-cover bg-white w-full"
        muted
		autoPlay
      />
    </div>
  );
};

export default MediaPlayer;
