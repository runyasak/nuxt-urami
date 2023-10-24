import { createRequestHandler } from "@urami/core";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  const handler = createRequestHandler(config.handlerConfig);

  const url = event.node.req.headers.host + (event.node.req.originalUrl || "");

  return handler({
    url,
    headers: event.headers,
  });
});
