import {
	VideoPreviewItem,
	PeeksPreviewItem,
} from "./components/MediaPreviewItem";
import withCustomMediaPreviewItem from "./components/RenderMediaPreviews";
import { IMediaPreview } from "./types";
import mockMediaPreviewsProps from "../../../../mockDataJson/MEDIA_PREVIEWS_MOCK_DATA.json";

const RenderMediaPreviews = withCustomMediaPreviewItem(PeeksPreviewItem);

const base: IMediaPreview = {
	gridName: "Peeks",
	gridType: "Peeks",
	MediaGrid: RenderMediaPreviews,
	previewItemsArrayData: mockMediaPreviewsProps,
};

export const mockMediaPreviewProps = {
	base,
};
