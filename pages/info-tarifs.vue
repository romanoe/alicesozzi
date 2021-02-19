
<style>

.info-tarif {
  text-align: left;
}

.row-info-tarif {
  padding: 5% 0 2% 0;
  background-color: rgba(255,255,255,0.4);

}

#title-info {
  color: #C7287D;
  font-size: 30px;
  font-weight: 500;

}
</style>
<template>
<div>



  <v-row justify="center" align="start" class = 'row-info-tarif'>
    <v-col cols=12 md=4 sm=1>
      <div class='info-tarif'><span id='title-info'>INFORMATIONS </span></div>
      <div class = 'info-tarif'>
        <p>Remboursé <b>ASCA RME</b>.</p>
        <p>Une séance dure environ 1 heure.</p>
        <p>Il est conseillé de porter des vêtements comfortables puisque le traitement est généralement effectué par-dessus l’habillement.</p>

    </div>
  </v-col>

    <v-col cols=12 md=3 sm=1>
    <div class='info-tarif'><span id='title-info'>TARIFS </span></div>
        <p><b>CHF 120.-/heure</b></p>
        <p>Il est conseillé de se renseigner auprès de votre assurance complémentaire avant le début d'une séance. </p>
      </v-col>

  </v-row>

</div>
</template>

<script>
export default {
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
</script>
