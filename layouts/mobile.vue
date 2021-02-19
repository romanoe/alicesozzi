<template>
<div>


<v-app>
    <!-- Backgroun image top-->
    <div class='img-background-header'>
      <img src='~/assets/img/home_Fruitgrenade@2x.png' />
    </div>

    <!-- Header -->
    <HeaderMobile />

    <!-- Main content (pages) -->
    <v-main>
      <Nuxt />
    </v-main>

    <!-- Footer -->
    <Footer />

    <!-- Bacground image botton -->
    <div class='img-background-footer'>
      <img src='~/assets/img/AliceSozzi_plantes@2x.png' />
    </div>
  </v-app>

</div>
</template>

<style>

h4 {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  color: #C7287D;
}

.img-background-header {
  position: relative;
  z-index: -1;
}

.img-background-header img {
  position: absolute;
  top: 0px;
  right: 0px;

}

p {
  color : #834B99;
  font-size: large;
}


header
{
  height: 80px !important;
}

</style>
