import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry'

Vue.use(VueMasonryPlugin)

    Add this plugin to your nuxt.config.js

  plugins: [
    { src: '~/plugins/vue-masonry', ssr: false }
  ]
