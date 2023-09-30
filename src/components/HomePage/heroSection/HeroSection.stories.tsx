import type { Meta, StoryObj } from "@storybook/react";

import HeroSection from "./HeroSection";
import { mockHeroSectionProps } from "./HeroSection.mocks";

const meta = {
	title: "HomePage/HeroSection",
	component: HeroSection,
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		...mockHeroSectionProps.base,
	},
};
