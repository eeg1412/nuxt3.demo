// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  routeRules: {
    '/api/**': { proxy: 'http://127.0.0.1:3001/api/**' },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    preference: 'light',
  },
})
