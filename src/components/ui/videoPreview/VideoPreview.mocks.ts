import { imageUrls } from "@/components/RootPages/homePage/components/trending/Trending.mocks";
import { IVideoPreviewsArray } from "./types";

const base: IVideoPreviewsArray = {
	previewItems: imageUrls,
	gridName: "Trending",
};

export const mockVideoPreviewProps = {
	base,
};
