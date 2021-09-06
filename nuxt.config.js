export default {

  mode: "spa",

  loadingIndicator: {
    name: "pulse",
    color: "#C7287D",
    background: "white"
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alice Sozzi | Fasciathérapeute et psychologue',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;500;600;700;800&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/device',

  ],



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'sm',
        breakpoints: {
          mobile: 450,
          tablet: 900,
          laptop: 1250,
          desktop: Infinity,
        }
      }
    ]

  ],



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
