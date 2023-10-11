import { imageUrls } from "@/components/RootPages/homePage/components/trending/Trending.mocks";
import { IRenderPeeksPreviews } from "./PeeksPreview";

const base: IRenderPeeksPreviews = {
	previewItems: imageUrls.slice(4),
	gridName: "Peeks",
};

export const mockPeeksPreviewProps = {
	base,
};
