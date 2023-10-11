import type { Meta, StoryObj } from "@storybook/react";

import Trending from "./Trending";
import { mockTrendingProps } from "./Trending.mocks";

const meta = {
	title: "HomePage/Trending",
	component: Trending,
} satisfies Meta<typeof Trending>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockTrendingProps.base,
	},
};
