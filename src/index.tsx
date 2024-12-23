import { Hono } from "hono";
import { renderToString } from "react-dom/server";

type Env = {
	Bindings: {
		MY_VAR: string;
	};
};

const app = new Hono<Env>();

const routes = app
	// api
	.get("/api/clock", (c) => {
		return c.json({
			var: c.env.MY_VAR, // Cloudflare Bindings
			time: new Date().toLocaleTimeString(),
		});
	})
	// react entry point
	.get("*", (c) => {
		return c.html(
			renderToString(
				// biome-ignore lint/a11y/useHtmlLang: <explanation>
				<html>
					<head>
						<meta charSet="utf-8" />
						<meta
							content="width=device-width, initial-scale=1"
							name="viewport"
						/>
						<link
							rel="stylesheet"
							href="https://cdn.simplecss.org/simple.min.css"
						/>
						{import.meta.env.PROD ? (
							// biome-ignore lint/style/useSelfClosingElements: <explanation>
							<script type="module" src="/static/client.js"></script>
						) : (
							// biome-ignore lint/style/useSelfClosingElements: <explanation>
							<script type="module" src="/src/client/main.tsx"></script>
						)}
					</head>
					<body>
						<div id="root" />
					</body>
				</html>,
			),
		);
	});
export type AppType = typeof routes;
export default app;
