export interface IMediaPreview extends IRenderMediaPreviews {
	MediaGrid: React.Reactnode;
}

export interface IRenderMediaPreviews {
	previewItemsArrayData: any[];
	gridName: string;
	gridType: string;
}

export interface IMediaPreviewItem {
	imagePreview: string;
	username: string;
	title: string;
	category: string;
	viewerCount: string;
}

export interface IPeeksPreviewItem {
	imagePreview: string;
	title: string;
	viewerCount: string;
	gridName: string;
	gridType: string;
}
export interface IVideoPreviewItem extends IPeeksPreviewItem {
	username: string;
	category: string;
}

export interface IClipsPreviewItem extends IPeeksPreviewItem {
	username: string;
}

export interface IStreamPreviewItemData {
	imagePreview: string;
	username: string;
	title: string;
	category: string;
	viewerCount: string;
}

export interface IPeeksPreviewItemData {
	imagePreview: string;
	title: string;
	viewerCount: string;
}

export interface IClipsPreviewItemData {
	imagePreview: string;
	username: string;
	title: string;
	viewerCount: string;
}
