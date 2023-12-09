# Setup

Optimize images in your Nuxt.js project effortlessly with Nuxt Urami — just a one command.

---

# Installation

1. Install `nuxt-urami` dependency

::: code-group

```sh [pnpm]
$ pnpm add nuxt-urami
```

```sh [npm]
$ npm install nuxt-urami
```

```sh [yarn]
$ yarn add nuxt-urami
```

:::

2. Add `modules` section in `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-urami"],
});
```

---

# Image component

You can import image component `<UramiImage />` globally in your Nuxt.js project.

```vue
<template>
  <UramiImage
    src="https://demo.rayriffy.com/tom-scott.jpg"
    width="801"
    height="801"
    alt="Tom Scott"
  />
</template>
```
