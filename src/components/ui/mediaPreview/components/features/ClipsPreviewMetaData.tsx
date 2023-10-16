import React from "react";
import { IClipsPreviewItemData } from "../../types";

const ClipsPreviewMetaData = ({
	title,
	username,
	viewerCount,
}: Partial<IClipsPreviewItemData>) => {
	return (
		<div className="video-preview-item-meta-data">
			<div className="video-preview-item-title grid-col-span-2 ellipsis-text">
				{title}
			</div>
			<div className="video-preview-item-viewer-data grid-row-span-2">
				<div className="video-preview-viewer-count">{viewerCount}</div>
			</div>
			<div className="video-preview-item-username ellipsis-text">
				{username}
			</div>
		</div>
	);
};

export default ClipsPreviewMetaData;
