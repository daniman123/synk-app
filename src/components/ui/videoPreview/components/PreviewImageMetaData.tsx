import React from "react";
import { IVideoPreview } from "../types";

import Live from "../../../../assets/live.svg";
import Image from "next/image";

const PreviewImageMetaData = ({
	category,
	title,
	username,
	viewerCount,
}: Partial<IVideoPreview>) => {
	return (
		<div className="video-preview-item-meta-data">
			<div className="video-preview-item-title grid-col-span-2">{title}</div>
			<div className="video-preview-item-viewer-data grid-row-span-2">
				<Image src={Live} alt="" />
				<div className="video-preview-viewer-count">{viewerCount}</div>
			</div>
			<div className="video-preview-item-username">{username}</div>
			<div className="video-preview-item-category">{category}</div>
		</div>
	);
};

export default PreviewImageMetaData;
