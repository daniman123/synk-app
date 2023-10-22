import type { Meta, StoryObj } from "@storybook/react";

import ViewerChat from "./ViewerChat";
import { mockViewerChatProps } from "./ViewerChat.mocks";

const meta = {
	title: "ui/ViewerChat",
	component: ViewerChat,
  parameters:{
    layout:"centered"
  }
} satisfies Meta<typeof ViewerChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockViewerChatProps.base,
	},
};
