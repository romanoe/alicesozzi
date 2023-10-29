import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Fonts
import "@fontsource/source-sans-pro/400.css"; 
import "@fontsource/source-sans-pro/200.css"; 
import "@fontsource/source-sans-pro/900.css"; 

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



library.add(faBars);

const vuetify = createVuetify({
    components,
    directives,
  })
  

const app = createApp(App).use(vuetify);

app.use(router);

app.component('font-awsome-icon', FontAwesomeIcon).mount('#app');