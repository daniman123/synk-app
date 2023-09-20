import type { Preview } from "@storybook/react";
import "../src/components/Layouts/primary/PrimaryLayout.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},

		layout: "fullscreen",
	},
};

export default preview;
