<style>
.text-home-page {
  color: #834B99;
  font-weight: 300;
  font-size: xx-large;
}


.mes-actions {
  background-color: #F7ECDE;
  opacity: 0.8;
  height: auto;
  text-align: center;
  padding: 3% 0 3% 0;

}

#img-actions {
  height: 150px;
  margin-bottom: 3%;
}

#title {
  color: #C7287D;
  font-size: 35px;
  font-weight: 600;

}

.text-mes-actions {
  text-align: left;
  margin: auto;
  width: 80%;
}

.intro {
  margin: 0% 5% 5% 0%;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#corps-complice {
  z-index: -1;
}


</style>


<template>
<div>

    <v-row>
      <v-col cols=12 md=5 sm=1>
        <v-img id = "corps-complice" :src='require("~/assets/img/home_text1@2x.png")' aspect-ratio="6" contain></v-img>
      </v-col>
      <v-col cols=12 md=5 sm=1>
      </v-col>
    </v-row>

    <div class="intro">
    <v-row justify="center" >
      <v-col cols=12 md=5 sm=1>
        <span class='text-home-page'>Par un toucher subtil , procurer une détente profonde et soigner la douleur en considérant le corps dans sa globalité...</span>
        <v-img id="img-pensee" :src='require("~/assets/img/home_1@2x.png")' aspect-ratio="1" contain></v-img>
      </v-col>
      <v-col cols=12 md=5 sm=1>
        <v-img id="img-cabinet" :src='require("~/assets/img/home_AliceSozzi@2x.png")' aspect-ratio="1" contain></v-img>
        <span class='text-home-page'>… et permettre à la personne d’identifier les comportements et les schémas de pensée qui entravent la capacité innée du corps à s’auto-réguler. </span>
      </v-col>
    </v-row>
  </div>


  <div class='mes-actions'>
    <span id='title'>MES ACTIONS</span>

    <v-row class="custom-row" justify="center">
      <v-col md=3 sm=1>
        <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_equilibre@2x.png")' aspect-ratio="1" contain></v-img>
        <div class='text-mes-actions'>
          <span class="text-alice">Rééquilibrer les fonctions et les propriétés des tissus et organes, c’est-à-dire la physiologie, là où elle a été contrariée.</span>
        </div>
      </v-col>

      <v-col cols=12 md=3 sm=1>
        <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_toucher@2x.png")' aspect-ratio="1" contain></v-img>

        <div class='text-mes-actions'>
          <span class="text-alice">Proposer un toucher spécifique, en me basant sur les propriétés même des fascias (élasticité, rythmicité, réversibilité : capacité à se crisper et à se décrisper…) </span>
        </div>
      </v-col>

      <v-col cols=12 md=3 sm=1>
        <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_soulager@2x.png")' aspect-ratio="1" contain></v-img>

        <div class='text-mes-actions'>
          <span class="text-alice">Soulager les douleurs et désenflammer. Retrouver sa mobilité et une forme d’aisance corporelle en sollicitant la capacité naturelle du corps à se régénérer</span>
        </div>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row class="custom-row" justify="center">
      <v-col cols=12 md=3 sm=1>
        <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_fatigue@2x.png")' aspect-ratio="1" contain></v-img>

        <div class='text-mes-actions'>
          <span class="text-alice">Restaurer la sensibilité tissulaire lorsque le corps se désensibilise, et perd ainsi sa capacité à signaler tout dysfonctionnement.</span>
        </div>
      </v-col>

      <v-col cols=12 md=3 sm=1>
        <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_restaurer@2x.png")' aspect-ratio="1" contain></v-img>
        <div class='text-mes-actions'>
          <span class="text-alice">Réorienter la personne vers une meilleure perception sensorielle d’elle-même pour mieux « habiter » son corps.</span>
        </div>
      </v-col>

      <v-col cols=12 md=3 sm=1>
        <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_questionner@2x.png")' aspect-ratio="1" contain></v-img>
        <div class='text-mes-actions'>
          <span class="text-alice">Gagner une plus grande souplesse des tissus, et amener les personnes à se questionner sur les comportements à l’origine des tensions et douleurs.</span>
        </div>
      </v-col>
    </v-row>




  </div>

</div>



</div>
</template>



<script>
export default {
  layout: 'default'
}
</script>
