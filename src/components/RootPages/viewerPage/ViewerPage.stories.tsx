import type { Meta, StoryObj } from "@storybook/react";

import ViewerPage from "./ViewerPage";
import { mockViewerPageProps } from "./ViewerPage.mocks";

const meta = {
	title: "RootPages/ViewerPage",
	component: ViewerPage,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ViewerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockViewerPageProps.base,
	},
};
