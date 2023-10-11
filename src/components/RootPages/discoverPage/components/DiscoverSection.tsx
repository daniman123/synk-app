import { RenderVideoPreviews } from "@/components/ui/videoPreview/VideoPreview";
import { IRenderVideoPreviews } from "@/components/ui/videoPreview/types";
import React from "react";

const DiscoverSection = ({ previewItems, gridName }: IRenderVideoPreviews) => {
	return (
		<>
			<div className="discover-section-title">
				<h4>{gridName}</h4>
			</div>
			<RenderVideoPreviews previewItems={previewItems} gridName={gridName} />
		</>
	);
};

export default DiscoverSection;
