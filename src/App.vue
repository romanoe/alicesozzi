<script setup>
import { RouterView } from "vue-router";


import Default from "@/layouts/Default.vue";

</script>

<template>
  <v-app>

   <Default></Default>

  </v-app>
</template>

<style>


html {
  font-family:
    'Source Sans Pro',
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#title {
  font-size: 3rem;
  font-weight: 600;
  color: #C7287D;
}

#subtitle {
  font-size: 2.5rem;
  font-weight: 500;
  color: #C7287D;
}

#subtitle-3 {
  font-size: 2.3rem;
  font-weight: 400;
  color: #C7287D;
}



.v-application {
  font-family: 'Source Sans Pro',
    sans-serif;
  /* line-height: 1.5; */
}



#app {
  background: rgba(0, 0, 0, 0);
}

h4 {
  font-weight: 300;
  color: #C7287D;
}


a {
  text-decoration: none;

}

.v-application a {
  text-decoration: none;
  color: #C7287D !important;
}


p {
  color: #834B99;
  font-size: 1.8rem;
}


header {
  height: 80px !important;
}

</style>