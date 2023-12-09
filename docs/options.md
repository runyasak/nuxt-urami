# Options

Configure Nuxt Urami with `urami` property.

::: tip
All of these options are optional.

Except `storePath` which has default value is `.nuxt-urami/images`.
:::

```ts
export default {
  urami: {
    handlerConfig: {
      avif: false,
      remoteDomains: ["demo.rayriffy.com"],
      allowedDomains: ["nuxt-urami.netlify.app"],
      ttl: 1000 * 60 * 60 * 24 * 7,
      storePath: ".nuxt-urami/images", // default value
    },
  },
};
```

Learn more about overwriting the `urami` configuration in the [Urami Config](https://urami.dev/core/configuration) section.
