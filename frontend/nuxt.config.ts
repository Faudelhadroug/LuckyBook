import { defineNuxtConfig } from 'nuxt3'
import redirectSSL from 'redirect-ssl'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
      },
    },
  },
  serverMiddleware: [
    {
      handler: redirectSSL.create({
        enabled: process.env.NODE_ENV === 'production'
      }),
    }
  ],
})
