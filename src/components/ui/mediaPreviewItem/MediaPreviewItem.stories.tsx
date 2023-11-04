import type { Meta, StoryObj } from "@storybook/react";

import MediaPreviewItem from "./MediaPreviewItem";
import { mockMediaPreviewItemProps } from "./MediaPreviewItem.mocks";

const meta = {
  title: "ui/MediaPreviewItem",
  component: MediaPreviewItem,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "87px", width:"160px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MediaPreviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockMediaPreviewItemProps.base,
  },
};
