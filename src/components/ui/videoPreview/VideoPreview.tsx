import "./VideoPreview.css";
import PreviewImage from "./components/PreviewImage";
import PreviewImageMetaData from "./components/PreviewImageMetaData";
import { IRenderVideoPreviews, IVideoPreview } from "./types";

const VideoPreview = (metaData: IVideoPreview) => {
	return (
		<div className="video-preview-content-item">
			<PreviewImage imagePreview={metaData.imagePreview} />
			<PreviewImageMetaData {...metaData} />
		</div>
	);
};

export const RenderVideoPreviews = ({
	previewItems,
	gridName,
}: IRenderVideoPreviews) => {
	return (
		<div className={`video-preview-grid-container-wrapper ${gridName}`}>
			<div className="video-preview-grid-container">
				<div className="video-preview-grid">
					{previewItems.map((image, _) => (
						<VideoPreview key={image.imagePreview} {...image} />
					))}
				</div>
			</div>
		</div>
	);
};
