import { createRequestHandler } from "@urami/core";
import { defineEventHandler } from "h3";
import type { HandlerConfig } from "../../../module";

export default defineEventHandler((event) => {
  const handlerConfig = process.env["handlerConfig"]
    ? (JSON.parse(process.env["handlerConfig"]) as HandlerConfig)
    : undefined;

  const handler = createRequestHandler(handlerConfig);

  const url = event.node.req.headers.host + (event.node.req.originalUrl || "");

  return handler({
    url,
    headers: event.headers,
  });
});
