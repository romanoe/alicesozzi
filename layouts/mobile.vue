<template>
<div>

  <HeaderMobile />

  <MenuMobile/>

  <Nuxt />
  <!-- <Footer/> -->
</div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h4 {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  color: #C7287D;
}

.img-background-header {
    position: relative;
      z-index: -1;
}

.img-background-header img{
  position: absolute;
  top: 0px;
  right: 0px;

}


</style>
