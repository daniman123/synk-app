import React from "react";
import {
	IClipsPreviewItem,
	IPeeksPreviewItem,
	IVideoPreviewItem,
} from "../types";
import MediaPreviewImage from "./MediaPreviewImage";
import VideoPreviewMetaData from "./features/VideoPreviewMetaData";
import PeeksPreviewMetaData from "./features/PeeksPreviewMetaData";
import ClipsPreviewMetaData from "./features/ClipsPreviewMetaData";

const VideoPreview = ({
	imagePreview,
	gridName,
	gridType,
	...rest
}: IVideoPreviewItem) => {
	return (
		<div className="video-preview-content-item cursor-pointer">
			<MediaPreviewImage
				imagePreview={imagePreview}
				gridName={gridName}
				gridType={gridType}
			/>
			<VideoPreviewMetaData {...rest} />
		</div>
	);
};

const ClipsPreview = ({
	imagePreview,
	gridName,
	gridType,
	...rest
}: IClipsPreviewItem) => {
	return (
		<div className="video-preview-content-item cursor-pointer">
			<MediaPreviewImage
				imagePreview={imagePreview}
				gridName={gridName}
				gridType={gridType}
			/>
			<ClipsPreviewMetaData {...rest} />
		</div>
	);
};

const PeeksPreview = ({
	imagePreview,
	gridName,
	gridType,
	...rest
}: IPeeksPreviewItem) => {
	return (
		<div className="peeks-preview-content-item cursor-pointer">
			<MediaPreviewImage
				imagePreview={imagePreview}
				gridName={gridName}
				gridType={gridType}
			/>
			<PeeksPreviewMetaData {...rest} />
		</div>
	);
};

export const ClipsPreviewItem = React.memo(ClipsPreview);
ClipsPreview.displayName = "ClipsPreviewItem";

export const VideoPreviewItem = React.memo(VideoPreview);
VideoPreviewItem.displayName = "VideoPreviewItem";

export const PeeksPreviewItem = React.memo(PeeksPreview);
PeeksPreviewItem.displayName = "PeeksPreviewItem";
