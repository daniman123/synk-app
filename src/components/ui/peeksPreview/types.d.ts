export interface IPeeksPreview {
	imagePreview: string;
	title: string;
	viewerCount: string;
}

export interface IPeeksPreviewArray {
	trendingItems: IPeeksPreview[];
}

export interface IRenderPeeksPreviews {
	previewItems: any[];
	gridName: string;
}
