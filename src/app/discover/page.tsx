import DiscoverPage from "@/components/RootPages/discoverPage/DiscoverPage";
import { imageUrls } from "@/components/RootPages/homePage/components/trending/Trending.mocks";
import React from "react";

const Discover = () => {
	return (
		<main className="content-main">
			<DiscoverPage previewItems={imageUrls} />
		</main>
	);
};

export default Discover;
