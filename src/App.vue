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
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.title {
  /* fluid: ~30px on phones → 60.8px from ~1200px */
  font-size: clamp(1.75rem, 0.95rem + 3.8vw, 3.8rem);
  font-weight: 600;
  color: #c7287d;
  letter-spacing: 0.13em;
  overflow-wrap: break-word;
  hyphens: auto;
}

.subtitle {
  font-size: clamp(1.125rem, 0.85rem + 1.14vw, 1.7rem);
  text-transform: uppercase;
  font-weight: 300;
  color: #834b99;
  margin: auto;
  position: relative;
  width: 80%;
}

.v-application {
  font-family: "Source Sans Pro", sans-serif;
  /* line-height: 1.5; */
}

#app {
  background: rgba(0, 0, 0, 0);
}

h4 {
  font-weight: 300;
  color: #c7287d;
}

a {
  text-decoration: none;
}

.v-application a {
  text-decoration: none;
  color: #c7287d !important;
}

p {
  color: #834b99;
  /* fluid: 17px on phones → 28.8px from ~1200px */
  font-size: clamp(1.0625rem, 0.7rem + 1.46vw, 1.8rem);
  line-height: 1.5;
}

@media (max-width: 599px) {
  .title,
  .title-paragraph {
    line-height: 1.25;
  }

  .subtitle {
    width: 100%;
    padding-inline: 16px;
  }
}

header {
  height: 80px !important;
}
</style>
