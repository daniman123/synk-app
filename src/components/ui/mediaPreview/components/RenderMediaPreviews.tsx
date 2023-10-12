import React from "react";
import { IRenderMediaPreviews } from "../types";

const withCustomMediaPreviewItem = (
	WrappedComponent: React.ComponentType<any>
) => {
	return function RenderMediaPreviews({
		previewItemsArrayData,
		gridName,
		gridType,
	}: IRenderMediaPreviews) {
		return (
			<>
				{previewItemsArrayData.map((previewItemData, index) => (
					<WrappedComponent
						key={previewItemData + index}
						{...previewItemData}
						gridName={gridName}
						gridType={gridType}
					/>
				))}
			</>
		);
	};
};

export default withCustomMediaPreviewItem;
