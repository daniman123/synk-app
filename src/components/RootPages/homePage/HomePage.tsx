import HeroSection from "./components/heroSection/HeroSection";
import { mockHeroSectionProps } from "./components/heroSection/HeroSection.mocks";
import "./HomePage.css";
import withCustomMediaPreviewItem from "@/components/ui/mediaPreview/components/RenderMediaPreviews";
import {
	PeeksPreviewItem,
	VideoPreviewItem,
} from "@/components/ui/mediaPreview/components/MediaPreviewItem";
import MediaPreview from "@/components/ui/mediaPreview/MediaPreview";
import mockMediaPreviewsProps from "../../../../mockDataJson/MEDIA_PREVIEWS_MOCK_DATA.json";

export interface IHomePage {}
const RenderVideoPreviews = withCustomMediaPreviewItem(VideoPreviewItem);
const RenderPeeksPreviews = withCustomMediaPreviewItem(PeeksPreviewItem);

const HomePage = () => {
	return (
		<main className="content-main">
			<HeroSection exampleProp={mockHeroSectionProps.base.exampleProp} />

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
		</main>
	);
};

export default HomePage;
