import RenderPeeksPreviews from "@/components/ui/peeksPreview/PeeksPreview";
import { IPeeksPreviewArray } from "@/components/ui/peeksPreview/types";

const HomePeeks = ({ trendingItems }: IPeeksPreviewArray) => {
	return (
		<div className="PeeksPreview-container">
			<RenderPeeksPreviews previewItems={trendingItems} gridName="Peeks" />
		</div>
	);
};

export default HomePeeks;
