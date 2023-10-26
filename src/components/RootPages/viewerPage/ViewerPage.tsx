import MediaPlayer from "../../ui/mediaPlayer/MediaPlayer";
import MediaPlayerBanner from "../../ui/mediaPlayer/components/MediaPlayerBanner";
// import ViewerChat from "../../ui/viewerChat/ViewerChat";

const ViewerPage = () => {
	return (
		<div className="md:flex h-full w-full">
			<div className="block max-sm:w-full w-[calc(100%-16dvw)] max-lg:w-[calc(100%-30dvw)]">
				<video src="" className="max-md:w-full bg-red-500"></video>
				<div className="max-sm:h-[7dvh]">video banner</div>
				
				{/* <MediaPlayer /> */}
				{/* <MediaPlayerBanner /> */}
			</div>
			<div className="">chat</div>
			{/* <div className="h-full w-[16dvw] max-lg:w-[30dvw] bg-slate-700">chat</div> */}
		</div>
	);
};

export default ViewerPage;
