# Nuxt Urami

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Urami](https://urami.dev/) automatic image optimization module for Nuxt.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🛝 Example Project](https://github.com/runyasak/nuxt-urami-playground)

## Features

<!-- Highlight some of the features your module provide here -->

- 🖼️ **Optmized**:
  Optimizes images like Urami, into the best format and size based on the visitor's browser
- 🛠 **Zero Config**:
  A few lines of configuration are all it takes to ensure your Nuxt.js project delivers high-performance images.
- 🚀 **Easy to Use**:
  Makes image optimization effortless with a single component, requiring minimal setup, for a high-performance website

## Quick Setup

1. Add `nuxt-urami` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-urami

# Using yarn
yarn add --dev nuxt-urami

# Using npm
npm install --save-dev nuxt-urami
```

2. Add `nuxt-urami` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-urami"],
});
```

That's it! You can now use Nuxt Urami in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-urami/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-urami
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-urami.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-urami
[license-src]: https://img.shields.io/npm/l/nuxt-urami.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-urami
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
