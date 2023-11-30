import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addServerHandler,
} from "@nuxt/kit";

import { name, version } from "../package.json";

export interface NuxtUramiOptions {
  handlerConfig?: Partial<HandlerConfig>;
}

export interface HandlerConfig {
  remoteDomains?: string[];
  allowedDomains?: string[];
  storePath: string;
  ttl: number;
  avif: boolean;
}

export default defineNuxtModule<NuxtUramiOptions>({
  meta: {
    name,
    version,
    configKey: "urami",
  },
  setup(options, nuxt) {
    if (options.handlerConfig) {
      (nuxt.options.runtimeConfig["handlerConfig"] as Partial<HandlerConfig>) =
        options.handlerConfig;
    }

    const resolver = createResolver(import.meta.url);

    addComponent({
      name: "UramiImage",
      filePath: resolver.resolve("./runtime/components/UramiImage.vue"),
    });

    addServerHandler({
      route: "/api/_image",
      handler: resolver.resolve("./runtime/server/api/_image"),
    });
  },
});
