import type { Meta, StoryObj } from "@storybook/react";

        import Login from "./Login";
        import { mockLoginProps } from "./Login.mocks";
        
        const meta = {
          title: "PopUp/Login",
          component: Login,
        } satisfies Meta<typeof Login>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;
        
        export const Base: Story ={
          args: {
            ...mockLoginProps.base,
          },
        };
        