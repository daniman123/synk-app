import type { Meta, StoryObj } from "@storybook/react";

import { RenderVideoPreviews } from "./VideoPreview";
import { mockVideoPreviewProps } from "./VideoPreview.mocks";

const meta = {
	title: "VideoPreview/VideoPreview",
	component: RenderVideoPreviews,
	// parameters: {
	// 	layout: "centered",
	// },
} satisfies Meta<typeof RenderVideoPreviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockVideoPreviewProps.base,
	},
};
