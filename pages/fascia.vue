<style>
#domaines-applications {
  background-color: #DEC3E8;
  height: auto;
}

#title-traitement {
  font-size: 35px;
  font-weight: 600;
  color: white;
}



#pink {
  color: #C7287D
}
</style>


<template>
<div>

  <div id="domaines-applications">
    <div class='section-title' :class='$mq'><span id='title-traitement'>DOMAINES D'APPLICATIONS</span></div>
    <v-img id="" :src='require("~/assets/img/AliceSozzi_traitement@2x.png")' aspect-ratio="2.5" contain></v-img>
  </div>




  <div class='section-title' :class='$mq'><span id='title'>QU'EST-CE QU'UN FASCIA ? </span></div>
  <v-container>
    <v-row justify="center" align="top">
      <v-col cols=12 md=7 sm=6>



        <p>Les fascias sont des membranes translucides présentes absolument partout dans notre corps. Elles représentent environ 20% du poids de notre corps, et enveloppent, relient entre eux tous les éléments de notre organisme comme les muscles,
          les
          os, les organes y compris le cerveau et les vaisseaux sanguins.</p>


        <p>Le fait que les fascias soient justement pourvus de terminaisons nerveuses spécifiques à la douleur fait de la fasciathérapie une méthode particulièrement indiquée pour traiter les effets de cette douleur, car la capacité adaptative du
          fascia en tant que processus vivant a ses limites. En effet, si le stress se répète indéfiniment, le fascia se rétracte, se durcit, se fige, perd de son élasticité et sa sensibilité. C’est là que peut débuter le traitement
          en fasciathérapie.</p>


      </v-col>

      <v-col cols=12 md=5 sm=6>
        <v-img id="" :src='require("~/assets/img/AliceSozzi_corps@2x.png")' aspect-ratio="1" contain></v-img>

      </v-col>

    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  layout: 'default'
}
</script>
