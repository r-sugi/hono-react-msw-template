import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("/api/clock", () => {
		return HttpResponse.json({
			var: "test",
			time: new Date().toLocaleTimeString(),
		});
	}),
];
