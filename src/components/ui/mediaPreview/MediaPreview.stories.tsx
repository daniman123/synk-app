import type { Meta, StoryObj } from "@storybook/react";

import MediaPreview from "./MediaPreview";
import { mockMediaPreviewProps } from "./MediaPreview.mocks";

const meta = {
	title: "ui/MediaPreview",
	component: MediaPreview,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MediaPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockMediaPreviewProps.base,
	},
};
