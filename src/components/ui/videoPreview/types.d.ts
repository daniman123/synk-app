export interface IVideoPreview {
	imagePreview: string;
	username: string;
	title: string;
	category: string;
	viewerCount: string;
}

export interface IVideoPreviewsArray {
	previewItems: IVideoPreview[];
	
}

export interface IRenderVideoPreviews {
	previewItems: IVideoPreview[];
	gridName: string;
}
