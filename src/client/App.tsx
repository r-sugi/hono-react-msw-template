import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/Index";
import { About } from "./pages/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}

export default App;
