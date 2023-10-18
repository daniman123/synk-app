import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
	webpackFinal: async (config) => {
		config.resolve ??= {};
		config.resolve.alias ??= {};
		config.resolve.alias["@"] = path.resolve(__dirname, "../src");
		return config;
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	staticDirs: ["../public"],
	addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm",
        "@storybook/addon-styling-webpack",
        ({
          name: "@storybook/addon-styling-webpack",

          options: {
            rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
              require.resolve("style-loader"),
              {
                  loader: require.resolve("css-loader"),
                  options: {
                      
                      importLoaders: 1,
                  },
              },{
        loader: require.resolve("postcss-loader"),
        options: {
        implementation: require.resolve("postcss"),
        },
        },
          ],
        },],
          }
        })
    ],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
