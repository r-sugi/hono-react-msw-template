import type { Meta, StoryObj } from "@storybook/react";
import { Index } from "./Index";

// MSWのハンドラーをインポート
import { handlers } from "../mocks/api";

const meta = {
	title: "Pages/Index",
	component: Index,
	parameters: {
		layout: "fullscreen",
		// MSWハンドラーを追加
		msw: {
			handlers: [...handlers],
		},
	},
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof Index>;

export const 表示する: Story = {
	decorators: [(Story) => <Story />],
};
