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

.img-background-header {
  position: relative;
  z-index: -1;
}

.img-background-header img {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 33%;


}



.img-background-footer {
  position: relative;
  z-index: -1;
}

.img-background-footer img {
  position: absolute;
  bottom: 0px;
  right: 0px;
  opacity: 0.6;
  width: 33%;
}

a {
  text-decoration: none;

}

.v-application a {
  text-decoration: none;
  color: #C7287D !important;
}

.menu a {
  text-decoration: none;
  color: #C7287D;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 5px;
  z-index: 1
}

p {
  color: #834B99;
  font-size: 1.5vw;
}


header {
  height: 80px !important;
}
</style>



<template>
<div>

  <!-- App -->
  <v-app>
    <!-- Backgroun image top-->
    <div class='img-background-header'>
      <img src='~/assets/img/home_Fruitgrenade@2x.png' />
    </div>



    <!-- Main content (pages) -->
    <v-main>
      <!-- Header -->
      <Header />
      <Nuxt />
    </v-main>

    <!-- Footer -->
    <Footer />



    <!-- Background image botton -->
    <div class='img-background-footer'>
      <img src='~/assets/img/AliceSozzi_plantes@2x.png' />
    </div>
  </v-app>


</div>
</template>
