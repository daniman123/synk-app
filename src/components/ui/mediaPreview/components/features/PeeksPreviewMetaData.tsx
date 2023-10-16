import React from "react";
import { IPeeksPreviewItemData } from "../../types";

const PeeksPreviewMetaData = ({
	title,
	viewerCount,
}: Partial<IPeeksPreviewItemData>) => {
	return (
		<div className="peeks-preview-item-meta-data">
			<div className="peeks-preview-item-title">{title}</div>
			<div className="peeks-preview-total-viewer-count">{viewerCount}</div>
		</div>
	);
};

export default PeeksPreviewMetaData;
