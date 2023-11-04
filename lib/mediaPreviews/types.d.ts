export interface IMediaPreviewItemData {
	imagePreview: string;
	username: string;
	title: string;
	category: string;
	viewerCount: number;
}

export interface IMediaPreviewItemArray {
	dataArray: IMediaPreviewItemData[];
}
