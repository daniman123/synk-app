import { IVideoPreviewsArray } from "@/components/ui/videoPreview/types";
import "./DiscoverPage.css";
import DiscoverSection from "./components/DiscoverSection";

const DiscoverPage = ({ previewItems }: IVideoPreviewsArray) => {
	return (
		<div className="DiscoverPage-container">
			<DiscoverSection previewItems={previewItems} gridName="Discover" />
			<DiscoverSection previewItems={previewItems} gridName="Top" />
			<DiscoverSection previewItems={previewItems} gridName="You Might Like" />
			<DiscoverSection previewItems={previewItems} gridName="Top" />
		</div>
	);
};

export default DiscoverPage;
