<!-- Style -->
<style>
.title {
  font-weight: bold;
  font-size: medium;
}

.subtitle {
  font-weight: 300;
  font-size: small;
}

#header {
  padding: 20px 20px 20px 20px;
}

</style>


<!-- Template -->
<template>
<div>
  <NuxtLink to="/">
    <div id = "header">
      <v-row>
        <v-col cols=12 md=1 sm=1>
          <v-img id='img-alice-header' :src='require("~/assets/img/AliceSozzi.png")' aspect-ratio="1.5" contain></v-img>
         </v-col>
        <v-col cols=12 md=11 sm=1>
          <h4 class='text-alice'>
            <span class='title'> CABINET DE SOINS ALICE SOZZI</span>
            <br>
            <span class='subtitle'>PSYCHOLOGUE ET FASCIATHÉRAPEUTE, AGRÉE ASCA, RME</span>
          </h4>
        </v-col>
      </v-row>
    </div>
  </NuxtLink>
  <Menu />

</div>
</template>


<!-- Script -->
<script>
export default {};
</script>
