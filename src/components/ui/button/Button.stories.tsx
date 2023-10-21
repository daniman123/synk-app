import type { Meta, StoryObj } from "@storybook/react";

        import Button from "./Button";
        import { mockButtonProps } from "./Button.mocks";
        
        const meta = {
          title: "ui/Button",
          component: Button,
        } satisfies Meta<typeof Button>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;
        
        export const Base: Story ={
          args: {
            ...mockButtonProps.base,
          },
        };
        