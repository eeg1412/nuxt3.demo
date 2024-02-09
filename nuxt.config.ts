// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  routeRules: {
    '/api/**': { proxy: 'http://127.0.0.1:3001/api/**' },
    '/about': { swr: 600 },
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
