import type { Meta, StoryObj } from "@storybook/react";

        import DiscoverPage from "./DiscoverPage";
        import { mockDiscoverPageProps } from "./DiscoverPage.mocks";
        
        const meta = {
          title: "RootPages/DiscoverPage",
          component: DiscoverPage,
        } satisfies Meta<typeof DiscoverPage>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;
        
        export const Base: Story ={
          args: {
            ...mockDiscoverPageProps.base,
          },
        };
        