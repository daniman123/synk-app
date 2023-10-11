import {
	VideoPreviewItem,
	PeeksPreviewItem,
} from "./components/MediaPreviewItem";
import withCustomMediaPreviewItem from "./components/RenderMediaPreviews";
import { IMediaPreview } from "./types";
import { imageUrls } from "@/components/RootPages/homePage/components/trending/Trending.mocks";

const RenderMediaPreviews = withCustomMediaPreviewItem(VideoPreviewItem);

const base: IMediaPreview = {
	gridName: "video",
	gridType: "video",
	MediaGrid: RenderMediaPreviews,
	previewItemsArrayData: imageUrls,
};

export const mockMediaPreviewProps = {
	base,
};
