import MediaPlayer from "../../ui/mediaPlayer/MediaPlayer";
import MediaPlayerBanner from "../../ui/mediaPlayer/components/MediaPlayerBanner";
import ViewerChat from "../../ui/viewerChat/ViewerChat";

const ViewerPage = () => {
  return (
    <div className="flex justify-between">
      <div
        className="grid row-span-full w-[66.5dvw]"
        style={{
          gridTemplateRows: "720px 880px",
        }}
      >
        <MediaPlayer />
        <div>
          <MediaPlayerBanner />
        </div>
      </div>
      <div className="sticky top-[51px]">
        <ViewerChat />
      </div>
    </div>
  );
};

export default ViewerPage;
