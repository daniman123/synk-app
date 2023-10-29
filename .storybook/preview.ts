import type { Preview } from "@storybook/react";
import {
	INITIAL_VIEWPORTS,
	MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import "../src/app/globals.css";

const asusVivoBook = {
	name: "Asus VivoBook",
	styles: {
		width: "1280px",
		height: "563px",
	},
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		viewport: {
			viewports: { asusVivoBook, ...MINIMAL_VIEWPORTS },
			defaultViewport: "mobile1",
		},

		layout: "fullscreen",
	},
};

export default preview;
