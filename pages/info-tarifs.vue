
<style>

.info-tarif {
  text-align: left;
}

.row-info-tarif {
  padding: 5% 0 2% 0;
  background-color: rgba(255,255,255,0.5);
}

#title-info {
  color: #C7287D;
  font-size: 30px;
  font-weight: 500;

}
</style>
<template>
<div>


  <v-container>
  <v-row justify="center" align="start" class = 'row-info-tarif' >
    <v-col cols=12 md=6 sm=1>
      <div class='info-tarif'><p id='title-info' class='text-center'>INFORMATIONS </p></div>
      <div class = 'info-tarif'>
        <p class='text-center'>Remboursé <b>ASCA RME</b>.</p>
        <p class='text-center'>Une séance dure environ 1 heure.</p>
        <p class='text-center'>Il est conseillé de porter des vêtements comfortables puisque le traitement est généralement effectué par-dessus l’habillement.</p>

    </div>
  </v-col>
    <v-col  md=6 sm=1>
    <div class='info-tarif'><p id='title-info'  class='text-center'>TARIFS </p></div>
        <p class='text-center'><b>CHF 120.-/heure</b></p>
        <p class='text-center'>Il est conseillé de se renseigner auprès de votre assurance complémentaire avant le début d'une séance. </p>
      </v-col>
  </v-row>
</v-container>
</div>
</template>

<script>
export default {
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
</script>
