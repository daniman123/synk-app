import type { Meta, StoryObj } from "@storybook/react";

import Auth from "./Auth";
import { mockAuthProps } from "./Auth.mocks";

const meta = {
  title: "features/Auth",
  component: Auth,
} satisfies Meta<typeof Auth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockAuthProps.base,
  },
};
