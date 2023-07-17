export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'news',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://dashly-theme.com/assets/css/theme.bundle.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css'
      }
    ]
  },
  router: {
    middleware: 'auth'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles/main"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/auth', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCSS: false,
        bootstrapVueCSS: true
      }
    ],
    ['vue-toastification/nuxt', {}],
    ['@nuxtjs/axios', {}],
    ['@nuxtjs/auth-next', {}]
  ],
  auth: {
    strategies: {
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID
      }
    },
    redirect: {
      login: '/auth/login',
      callback: '/auth/callback',
      logout: '/auth/logout',
      home: '/'
    }
  },
  bootstrapVue: {
    icons: true
  },
  axios: {
    baseURL: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
