export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  tres: {
    glsl: true,
    devtools: true
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
    '@vite-pwa/nuxt'
  ],
  app: {
    head: {
      link: [
        { rel: 'manifest', href: '/manifest.json' }
      ],
      meta: [
        { name: 'theme-color', content: 'ffffff' }
      ]
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: false, // Отключаем генерацию манифеста, т.к. используем свой
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,gif,ico,woff,woff2}'],
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})