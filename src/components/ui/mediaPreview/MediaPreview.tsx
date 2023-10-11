import "./MediaPreview.css";
import { IMediaPreview } from "./types";

const MediaPreview = ({
	gridName,
	gridType,
	MediaGrid,
	previewItemsArrayData,
}: IMediaPreview) => {
	return (
		<div className={`${gridType}-preview-grid-container-wrapper ${gridName}`}>
			<div className={`${gridType}-preview-grid-container ${gridName}`}>
				<div className={`${gridType}-preview-grid ${gridName}`}>
					<MediaGrid
						previewItemsArrayData={previewItemsArrayData}
						gridName={gridName}
						gridType={gridType}
					/>
				</div>
			</div>
		</div>
	);
};

export default MediaPreview;
