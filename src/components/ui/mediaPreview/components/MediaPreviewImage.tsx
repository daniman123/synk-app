import Image from "next/image";
import React from "react";
import { IPeeksPreviewItem } from "../types";

const MediaPreviewImage = ({
	imagePreview,
	gridName,
	gridType,
}: Partial<IPeeksPreviewItem>) => {
	return (
		<div className={`${gridType}-preview-item-preview ${gridName}`}>
			<Image
				src={imagePreview as string}
				alt=""
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
};

export default MediaPreviewImage;
