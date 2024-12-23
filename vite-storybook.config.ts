import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	console.log("mode desu: ", mode);
	return {
		build: {
			rollupOptions: {
				input: "./src/client.tsx",
				output: {
					entryFileNames: "static/client.js",
				},
			},
		},
	};
});
