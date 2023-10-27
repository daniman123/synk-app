import ViewerPage from "@/components/RootPages/viewerPage/ViewerPage";
import React from "react";
const tempSrc =
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const mockData = {
	category: "just chatting",
	pfpSrc: "http://dummyimage.com/242x100.png/cc0000/ffffff",
	title: "Gaming",
	viewCount: 777777,
	userName: "Azanabi",
};

const Viewer = () => {
	return <ViewerPage mediaPlayerSrc={tempSrc} mediaBannerData={mockData} />;
};

export default Viewer;
