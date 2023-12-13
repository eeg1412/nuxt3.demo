// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  routeRules: {
    '/api/**': { proxy: 'https://card.wikimoe.com/api/**' },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    preference: 'light',
  },
})
