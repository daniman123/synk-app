import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "./SearchBar";
import { mockSearchBarProps } from "./SearchBar.mocks";

const meta = {
  title: "features/SearchBar",
  component: SearchBar,
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story ={
  args: {
    ...mockSearchBarProps.base,
  },
};
