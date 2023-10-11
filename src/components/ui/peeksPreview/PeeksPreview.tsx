import "./PeeksPreview.css";
import PeeksPreviewImage from "./components/PeeksPreviewImage";
import PeeksPreviewImageMetaData from "./components/PeeksPreviewImageMetaData";
import { IPeeksPreview, IRenderPeeksPreviews } from "./types";

const PeeksPreview = (metaData: IPeeksPreview) => {
	return (
		<div className="peeks-preview-content-item">
			<PeeksPreviewImage imagePreview={metaData.imagePreview} />
			<PeeksPreviewImageMetaData {...metaData} />
		</div>
	);
};

const RenderPeeksPreviews = ({
	previewItems,
	gridName,
}: IRenderPeeksPreviews) => {
	return (
		<div className={`peeks-preview-grid-container-wrapper ${gridName}`}>
			<div className="peeks-preview-grid-container">
				<div className="peeks-preview-grid">
					{previewItems.map((image, _) => (
						<PeeksPreview key={image.imagePreview} {...image} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RenderPeeksPreviews;
