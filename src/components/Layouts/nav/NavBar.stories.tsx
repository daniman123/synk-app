import type { Meta, StoryObj } from "@storybook/react";

import NavBar from "./NavBar";
import { mockNavBarProps } from "./NavBar.mocks";

const meta = {
	title: "Layouts/NavBar",
	component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockNavBarProps.loggedOut,
	},
};

export const Alt: Story = {
	args: {
		...mockNavBarProps.loggedIn,
	},
};
