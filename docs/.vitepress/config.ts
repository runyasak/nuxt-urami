import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nuxt Urami",
  description: "Urami automatic image optimization module for Nuxt",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Example",
        link: "https://github.com/runyasak/nuxt-urami-playground",
      },
    ],

    sidebar: [
      {
        items: [
          { text: "Get started", link: "/introduction" },
          { text: "Options", link: "/options" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/runyasak/nuxt-urami" },
    ],
  },
  base: "https://runyasak.github.io/nuxt-urami/",
});
