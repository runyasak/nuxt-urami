export default defineNuxtConfig({
  modules: ["../src/module"],
  urami: {
    handlerConfig: {
      remoteDomains: ["demo.rayriffy.com"],
    },
  },
  devtools: { enabled: true },
});
