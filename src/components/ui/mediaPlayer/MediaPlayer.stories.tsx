import type { Meta, StoryObj } from "@storybook/react";

        import MediaPlayer from "./MediaPlayer";
        import { mockMediaPlayerProps } from "./MediaPlayer.mocks";
        
        const meta = {
          title: "ui/MediaPlayer",
          component: MediaPlayer,
        } satisfies Meta<typeof MediaPlayer>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;
        
        export const Base: Story ={
          args: {
            ...mockMediaPlayerProps.base,
          },
        };
        