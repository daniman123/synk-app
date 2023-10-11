import type { Meta, StoryObj } from "@storybook/react";

        import PeeksPreview from "./PeeksPreview";
        import { mockPeeksPreviewProps } from "./PeeksPreview.mocks";
        
        const meta = {
          title: "ui/PeeksPreview",
          component: PeeksPreview,
        } satisfies Meta<typeof PeeksPreview>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;
        
        export const Base: Story ={
          args: {
            ...mockPeeksPreviewProps.base,
          },
        };
        