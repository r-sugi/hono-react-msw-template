import { createRoot } from "react-dom/client";
import { useState } from "react";
import type { AppType } from "../index";
import { hc } from "hono/client";

export default function App() {
	const client = hc<AppType>("/");
	client.api.clock.$get({}).then((res) => {
		console.log(res.json());
	});

	return (
		<>
			<h1>Hello, Hono with React</h1>
			<h2>Example of useState()</h2>
			<Counter />
			<h2>Example of API fetch()</h2>
			<ClockButton />
		</>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	return (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button onClick={() => setCount(count + 1)}>
			You clicked me {count} times
		</button>
	);
}

const ClockButton = () => {
	const [response, setResponse] = useState<string | null>(null);

	const handleClick = async () => {
		const response = await fetch("/api/clock");
		const data = await response.json();
		const headers = Array.from(response.headers.entries()).reduce(
			// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
			(acc, [key, value]) => ({ ...acc, [key]: value }),
			{},
		);
		const fullResponse = {
			url: response.url,
			status: response.status,
			headers,
			body: data,
		};
		setResponse(JSON.stringify(fullResponse, null, 2));
	};

	return (
		<div>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={handleClick}>Get Server Time</button>
			{response && <pre>{response}</pre>}
		</div>
	);
};
