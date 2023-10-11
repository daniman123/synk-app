import Image from "next/image";
import React from "react";
import { IPeeksPreview } from "../PeeksPreview";

const PeeksPreviewImage = ({ imagePreview }: Partial<IPeeksPreview>) => {
	return (
		<div className="peeks-preview-item-preview">
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

export default PeeksPreviewImage;
