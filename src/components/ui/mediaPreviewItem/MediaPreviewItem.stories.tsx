import type { Meta, StoryObj } from "@storybook/react";

import MediaPreviewItem from "./MediaPreviewItem";
import { mockMediaPreviewItemProps } from "./MediaPreviewItem.mocks";

const meta = {
	title: "ui/MediaPreviewItem",
	component: MediaPreviewItem,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MediaPreviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockMediaPreviewItemProps.base,
	},
};
