import { RenderVideoPreviews } from "@/components/ui/videoPreview/VideoPreview";
import "./Trending.css";

import { ITrendingArray } from "./types";

const Trending = ({ trendingItems }: ITrendingArray) => {
	return (
		<div className="Trending-container">
			<RenderVideoPreviews previewItems={trendingItems} gridName="Trending" />
		</div>
	);
};

export default Trending;
