import React from "react";
import { IMediaPreviewItem } from "../types";

const PeeksPreviewMetaData = ({
	title,
	viewerCount,
}: Partial<IMediaPreviewItem>) => {
	return (
		<div className="peeks-preview-item-meta-data">
			<div className="peeks-preview-item-title">{title}</div>
			<div className="peeks-preview-total-viewer-count">{viewerCount}</div>
		</div>
	);
};

export default PeeksPreviewMetaData;
