import { createRoot } from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");
if (!domNode) throw new Error("Failed to find the root element");

const root = createRoot(domNode);
root.render(<App />);
