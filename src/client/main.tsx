import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { worker } from "./mocks/browser";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
console.log(import.meta.env.VITE_TEST);

if (import.meta.env.MODE === "development") {
	worker.start().then(() => {
		createRoot(rootElement).render(
			<StrictMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</StrictMode>,
		);
	});
}
createRoot(rootElement).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
