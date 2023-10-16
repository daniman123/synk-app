import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import { mockHeroSectionProps } from "./components/heroSection/HeroSection.mocks";
import "./HomePage.css";
import withCustomMediaPreviewItem from "@/components/ui/mediaPreview/components/RenderMediaPreviews";
import {
	ClipsPreviewItem,
	PeeksPreviewItem,
	VideoPreviewItem,
} from "@/components/ui/mediaPreview/components/MediaPreviewItem";
import MediaPreview from "@/components/ui/mediaPreview/MediaPreview";
import mockMediaPreviewsProps from "../../../../mockDataJson/MEDIA_PREVIEWS_MOCK_DATA.json";
import { IVideoPreviewItem } from "@/components/ui/mediaPreview/types";

const enhanceWithCustomMediaPreviewItem = (
	Component:
		| React.ComponentType<any>
		| React.MemoExoticComponent<
				({
					imagePreview,
					gridName,
					gridType,
					...rest
				}: IVideoPreviewItem) => React.JSX.Element
		  >,
	displayName: string | undefined
) => {
	const EnhancedComponent = withCustomMediaPreviewItem(Component);
	const MemoizedComponent = React.memo(EnhancedComponent);
	MemoizedComponent.displayName = displayName;
	return MemoizedComponent;
};

const RenderClipsPreviews = enhanceWithCustomMediaPreviewItem(
	ClipsPreviewItem,
	"RenderClipsPreviews"
);
const RenderVideoPreviews = enhanceWithCustomMediaPreviewItem(
	VideoPreviewItem,
	"RenderVideoPreviews"
);
const RenderPeeksPreviews = enhanceWithCustomMediaPreviewItem(
	PeeksPreviewItem,
	"RenderPeeksPreviews"
);

const HomePage: React.FC = () => (
	<main className="content-main">
		<HeroSection src={mockHeroSectionProps.base.src} />

		<MediaPreview
			MediaGrid={RenderVideoPreviews}
			gridName="Trending"
			gridType="video"
			previewItemsArrayData={mockMediaPreviewsProps}
		/>

		<MediaPreview
			MediaGrid={RenderPeeksPreviews}
			gridName="Peeks"
			gridType="peeks"
			previewItemsArrayData={mockMediaPreviewsProps.slice(4)}
		/>

		<MediaPreview
			MediaGrid={RenderClipsPreviews}
			gridName="Clips"
			gridType="video"
			previewItemsArrayData={mockMediaPreviewsProps}
		/>
	</main>
);

HomePage.displayName = "HomePage";

export default React.memo(HomePage);
