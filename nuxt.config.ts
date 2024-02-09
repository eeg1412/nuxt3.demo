// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  routeRules: {
    '/about': { swr: 30 },
    '/index22': { swr: 600 },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    preference: 'light',
  },
  nitro: {
    storage: {
      cache: {
        driver: 'fs',
        base: './cache',
      },
    },
  },
})
