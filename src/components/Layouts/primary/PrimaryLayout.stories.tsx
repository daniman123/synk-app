import type { Meta, StoryObj } from "@storybook/react";
import PrimaryLayout from "./PrimaryLayout";
import { mockPrimaryLayoutProps } from "./PrimaryLayout.mocks";

const meta = {
	title: "Layouts/PrimaryLayout",
	component: PrimaryLayout,
} satisfies Meta<typeof PrimaryLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockPrimaryLayoutProps.base,
	},
};
