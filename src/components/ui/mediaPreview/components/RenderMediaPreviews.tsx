import React from "react";
import { IRenderMediaPreviews } from "../types";

const withCustomMediaPreviewItem = (
	WrappedComponent: React.ComponentType<any>
) => {
	const MemoizedWrappedComponent = React.memo(WrappedComponent);

	return function RenderMediaPreviews({
		previewItemsArrayData,
		gridName,
		gridType,
	}: IRenderMediaPreviews) {
		return (
			<React.Fragment>
				{previewItemsArrayData.map((previewItemData, index) => (
					<MemoizedWrappedComponent
						key={index}
						{...previewItemData}
						gridName={gridName}
						gridType={gridType}
					/>
				))}
			</React.Fragment>
		);
	};
};

export default withCustomMediaPreviewItem;
