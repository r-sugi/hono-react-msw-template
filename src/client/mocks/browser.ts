import { setupWorker } from "msw/browser";
import { handlers } from "./api/index";

export const worker = setupWorker(...handlers);
