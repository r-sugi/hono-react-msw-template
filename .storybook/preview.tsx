import React from "react";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";

initialize();

const preview: Preview = {
	parameters: {
		// actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	loaders: [mswLoader],
	decorators: [
		(Story: FC) => {
			return (
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			);
		},
	],
};

export default preview;
