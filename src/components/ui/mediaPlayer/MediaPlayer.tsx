"use client";

import { useRef } from "react";
import MediaPlayerControls from "./components/MediaPlayerControls";

const MediaPlayer = () => {
  const mediaVideoRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      id="media-player-container"
      style={{ height: "calc(90dvh - 51px)" }}

      className="max-h-screen relative group"
    >
      <MediaPlayerControls mediaVideoRef={mediaVideoRef} />
      <video
        // style={{ height: "calc(90dvh - 51px)" }}
        className="w-full aspect-video h-full max-h-screen object-cover bg-white "
        ref={mediaVideoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        id="media-player"
        controls={false}
        muted
        // autoPlay
      />
    </div>
  );
};

export default MediaPlayer;
