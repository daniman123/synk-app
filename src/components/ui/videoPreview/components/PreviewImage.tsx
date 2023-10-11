import Image from "next/image";
import React from "react";
import { IVideoPreview } from "../types";

const PreviewImage = ({ imagePreview }: Partial<IVideoPreview>) => {
	return (
		<div className="video-preview-item-preview">
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

export default PreviewImage;
