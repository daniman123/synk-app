import React from "react";
import { IPeeksPreview } from "../PeeksPreview";

const PeeksPreviewImageMetaData = ({
	title,
	viewerCount,
}: Partial<IPeeksPreview>) => {
	return (
		<div className="peeks-preview-item-meta-data">
			<div className="peeks-preview-item-title">{title}</div>
			<div className="peeks-preview-total-viewer-count">{viewerCount}</div>
		</div>
	);
};

export default PeeksPreviewImageMetaData;
