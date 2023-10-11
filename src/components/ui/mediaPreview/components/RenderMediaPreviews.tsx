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
				{previewItemsArrayData.map((previewItemData) => (
					<WrappedComponent
						key={previewItemData.id}
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
