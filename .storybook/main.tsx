/** @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	core: {
		builder: {
			name: "@storybook/builder-vite",
			options: {
				// vite.config.tsのmodeを指定できなかったためファイルレベルで分けた
				viteConfigPath: "vite-storybook.config.ts",
			},
		},
	},
	docs: {
		autodocs: true,
	},
};

export default config;
