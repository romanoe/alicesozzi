<style>
.text-home-page {
  color: #834B99;
  font-weight: 300;
  font-size: x-large;
  line-height: 1.2em;
}


.mes-actions {
  background-color: #F7ECDE;
  opacity: 0.8;
  height: auto;
  text-align: center;
  padding: 3em;

}

#img-actions {
  height: 150px;
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
  z-index: -1;
  position: relative;
  margin: 3% auto 3% auto;
}


#corps-complice {
  z-index: -1;
  margin-bottom: -20%;
}


#img-pensee {
  margin-top: 10%;
}


#img-cabinet {
  /* margin-top: -%; */
}

</style>


<template>
<div>



  <!-- First page text - Mobile -->
  <div v-if="$device.isDesktop">
    <v-container>
       <v-row justify="center" align="center">
         <v-col cols=12 md=7 sm=1>
           <v-img id="corps-complice" :src='require("~/assets/img/home_text1@2x.png")' aspect-ratio="3" contain></v-img>
         </v-col>
         <v-col cols=12 md=5 sm=1>
         </v-col>
       </v-row>
     </v-container>
    <v-container>

      <div class="intro">
        <v-row justify="center" align="center">
          <v-col cols=12 md=6 sm=6>
            <p><span class='text-home-page'>Par un <b>toucher subtil</b>, procurer une détente profonde et soigner la douleur en considérant le corps dans sa globalité.</span> </p> <p><span class='text-home-page'>Par la <b>parole</b>, permettre d'identifier les comportements et les schémas de pensée qui entravent la capacité innée du corps à s’auto-réguler.</span></p>
          </v-col>
          <v-col cols=12 md=6 sm=6>
            <v-img id="img-cabinet" :src='require("~/assets/img/home_AliceSozzi@2x.png")' aspect-ratio="1.5" contain></v-img>
            <span class='text-home-page'> </span>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>

<!-- First page text - Mobile -->
  <div v-else-if="$device.isMobile">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols=12 md=7 sm=1>
          <v-img id="corps-complice" :src='require("~/assets/img/home_text1@2x.png")' aspect-ratio="3" contain></v-img>
        </v-col>
        <v-col cols=12 md=5 sm=1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="intro">
        <v-row justify="center" align="center">
          <v-col cols=12 md=6 sm=1>
            <span class='text-home-page'>Par un toucher subtil, procurer une détente profonde et soigner la douleur en considérant le corps dans sa globalité...</span>
            <v-img id="img-cabinet" :src='require("~/assets/img/home_AliceSozzi@2x.png")' aspect-ratio="1" contain></v-img>
          </v-col>
          </v-col>
          <v-col cols=12 md=6 sm=1>
            <span class='text-home-page'>… et permettre à la personne d’identifier les comportements et les schémas de pensée qui entravent la capacité innée du corps à s’auto-réguler. </span>
            <v-img id="img-pensee" :src='require("~/assets/img/home_1@2x.png")' aspect-ratio="1" contain></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>


    <v-container>
        <v-img :src='require("~/assets/img/AliceSozzi_fascia@2x.png")' aspect-ratio="3" contain></v-img>
      </v-container>


    <!-- Mes actions -->
    <div class='mes-actions'>
      <span id='title'>MES ACTIONS</span>
      <v-container>
        <v-row justify="center">
          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_equilibre@2x.png")' aspect-ratio="1" contain></v-img>
            <div class='text-mes-actions'>
              <span class="text-alice">Rééquilibrer les fonctions et les propriétés des tissus, c’est-à-dire la physiologie, là où elle a été contrariée, afin d'alléger les tensions, défatiguer, gagner en vitalté. </span>
            </div>
          </v-col>
          <v-col cols=12 md=4 sm=1 xs=1>
            <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_toucher@2x.png")' aspect-ratio="1" contain></v-img>
            <div class='text-mes-actions'>
              <span class="text-alice">Proposer un toucher spécifique, en me basant sur les propriétés même des fascias afin de soigner le corps après des stress répétés, des chocs émotionnels, des blessures </span>
            </div>
          </v-col>
          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_soulager@2x.png")' aspect-ratio="1" contain></v-img>
            <div class='text-mes-actions'>
              <span class="text-alice">Soulager les douleurs et désenflammer. Retrouver sa mobilité et une forme d’aisance corporelle en sollicitant la capacité naturelle du corps à se régénérer</span>
            </div>
          </v-col>
        </v-row>
      </v-container>



    <v-spacer></v-spacer>


    <v-container>
      <v-row justify="center">
        <v-col cols=12 md=4 sm=1>
          <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_fatigue@2x.png")' aspect-ratio="1" contain></v-img>
          <div class='text-mes-actions'>
            <span class="text-alice">Restaurer la sensibilité tissulaire lorsque le corps se désensibilise, et perd ainsi sa capacité à signaler tout dysfonctionnement et à s'équilibrer</span>
          </div>
        </v-col>

        <v-col cols=12 md=4 sm=1>
          <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_restaurer@2x.png")' aspect-ratio="1" contain></v-img>
          <div class='text-mes-actions'>
            <span class="text-alice">Réorienter la personne vers une meilleure perception sensorielle d’elle-même pour mieux « habiter » son corps</span>
          </div>
        </v-col>

        <v-col cols=12 md=4 sm=1>
          <v-img id="img-actions" :src='require("~/assets/img/AliceSozzi_questionner@2x.png")' aspect-ratio="1" contain></v-img>
          <div class='text-mes-actions'>
            <span class="text-alice">Amener la personne à se questionner sur les comportements à l’origine des tensions et douleurs</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</div>
</template>



<script>
export default {
  layout: 'default'
}
</script>
