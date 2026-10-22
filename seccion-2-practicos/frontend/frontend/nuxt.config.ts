export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  runtimeConfig: {
    public: {
      apiKey: ''
    }
  },
  compatibilityDate: '2024-11-01'
})