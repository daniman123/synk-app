import React from "react";
import { IPeeksPreviewItem, IVideoPreviewItem } from "../types";
import MediaPreviewImage from "./MediaPreviewImage";
import VideoPreviewMetaData from "./VideoPreviewMetaData";
import PeeksPreviewMetaData from "./PeeksPreviewMetaData";

export const VideoPreviewItem = (previewItemData: IVideoPreviewItem) => {
	return (
		<div>
			<MediaPreviewImage
				imagePreview={previewItemData.imagePreview}
				gridName={previewItemData.gridName}
				gridType={previewItemData.gridType}
			/>
			<VideoPreviewMetaData {...previewItemData} />
		</div>
	);
};

export const PeeksPreviewItem = (previewItemData: IPeeksPreviewItem) => {
	return (
		<div>
			<MediaPreviewImage
				imagePreview={previewItemData.imagePreview}
				gridName={previewItemData.gridName}
				gridType={previewItemData.gridType}
			/>
			<PeeksPreviewMetaData {...previewItemData} />
		</div>
	);
};
