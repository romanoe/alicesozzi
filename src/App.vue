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
  font-size: 3.8rem;
  font-weight: 600;
  color: #c7287d;
  letter-spacing: 0.1em;
  letter-spacing: 0.5rem;
}

.subtitle {
  font-size: 1.7rem;
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
  font-size: 1.8rem;
}

header {
  height: 80px !important;
}
</style>
