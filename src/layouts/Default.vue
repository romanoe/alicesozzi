<script setup>
import { RouterView } from "vue-router";

import imageTop from "@/assets/img/home_Fruitgrenade@2x.png"
import imageBottom from "@/assets/img/AliceSozzi_plantes@2x.png"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"


</script>

<template>
  <div class="main-container">
    <!-- Backgroun image top-->
    <div class='img-background-header'>
      <img src='/img/home_Fruitgrenade@2x.png' alt="grenades"/>
    </div>
    <Header />
    <RouterView />
    <Footer />
    <div class='img-background-footer'>
      <img src='/img/AliceSozzi_plantes@2x.png' alt="plantes" />
    </div>
  </div>
</template>

<style scoped>
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
  font-size: 1.5vw;
}


header {
  height: 80px !important;
}


.img-background-header {
  position: relative;
  background-color: transparent;

}

.img-background-header img {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 33%;


}

.img-background-footer {
  position: relative;
}

.img-background-footer img {
  position: absolute;
  bottom: 0px;
  right: 0px;
  opacity: 0.6;
  width: 33%;
}

</style>