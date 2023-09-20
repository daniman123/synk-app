import type { Meta, StoryObj } from "@storybook/react";

import SideBar from "./SideBar";
import { mockSideBarProps } from "./SideBar.mocks";

const meta = {
	title: "Layouts/SideBar",
	component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockSideBarProps.base,
	},
};

export const Alt: Story = {
	args: {
		...mockSideBarProps.alt,
	},
};
