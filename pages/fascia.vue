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

.title-paragraph {
  font-size: 28px;
  font-weight: 600;
  color: #834B99;

}

#pink {
  color: #C7287D
}
</style>


<template>
<div>

  <div class='section-title'><span id='title'>QU'EST-CE QU'UN FASCIA ? </span></div>

<div class = "container">
  <p>Les fascias sont des membranes translucides présentes absolument partout dans notre corps. Elles représentent environ 20% du poids de notre corps, et enveloppent, relient entre eux tous les éléments de notre organisme comme les muscles, les os, les organes y compris le cerveau et les vaisseaux sanguins.</p>

  <p><b>De la tête aux pieds et de la périphérie à la profondeur, le fascia est le tissu par excellence de l’adaptation, il est malléable, réactif, réversible dans sa capacité à se crisper et se décrisper. </b></p>

  <v-img id="" :src='require("~/assets/img/AliceSozzi_corps@2x.png")' aspect-ratio="3" contain ></v-img>



  <p>Le fait que les fascias soient justement pourvus de terminaisons nerveuses spécifiques à la douleur fait de la fasciathérapie une méthode particulièrement indiquée pour traiter la douleur.</p>

  <p>Car la capacité adaptative du fascia en tant que processus vivant a ses limites. Si le stress se répète indéfiniment, le fascia se rétracte, se durcit, se fige, perd de son élasticité et sa sensibilité. C’est là que peut débuter le traitement en fasciathérapie.</p>




</div>







</div>
</template>

<script>
export default {
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
</script>
