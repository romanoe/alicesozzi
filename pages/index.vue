<style>
.text-home-page {
  color: #834B99;
  font-weight: 300;
  font-size: 2.2em;
  line-height: 1.2em;
}

.jaune {
  background-color: #F7ECDE;
  letter-spacing: 1.8px;
color: #C7287D;
text-transform: uppercase;
opacity: 1;
text-align: center;
font: normal normal bold 1em Source Sans Pro;
padding: 5% 20% 5% 20%;
}


.mes-actions {
  /*  */
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




</style>


<template>
<div>



  <!-- First page text - Desktop -->
  <!-- <div v-if="$device.isDesktop"> -->
    <v-container>
       <v-row justify="center" align="center">
         <v-col cols=12 md=7 sm=1>
           <v-img id="corps-complice" :src='require("~/assets/img/home_text1@2x.png")' aspect-ratio="13" contain></v-img>
         </v-col>
         <v-col cols=12 md=5 sm=1>
         </v-col>
       </v-row>
     </v-container>

    <v-container>
      <div class="intro">
        <v-row justify="center" align="top">
          <v-col cols=12 md=7 sm=6>
            <v-img id="img-cabinet" :src='require("~/assets/img/home_AliceSozzi@2x.png")' aspect-ratio="1.5" contain></v-img>
          </v-col>
          <v-col cols=12 md=5 sm=6>
            <p><span class='text-home-page'>Par un toucher subtil soigner la douleur en procurant une détente profonde et en considérant le corps dans sa globalité</span></p>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-container>
      <div class="intro">
        <v-row justify="center" align="center">
          <v-col cols=12 md=7 sm=6>
            <p><span class='text-home-page'>Identifier les comportements et les schémas de pensée qui entravent la capacité innée du corps à s’autoréguler</span></p>
          </v-col>

          <!-- >Considérer le corps comme un interlocuteur à part entière avec un langage qui lui est propre et à i -->
          <v-col cols=12 md=5 sm=6>
            <v-img id="img-cabinet" :src='require("~/assets/img/Homme_alice_psy.png")' aspect-ratio="2" contain></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  <!-- </div> -->


<!-- First page text - Mobile -->
  <!-- <div v-else-if="$device.isMobile">
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

              </v-col>
          </v-col>
          <v-col cols=12 md=6 sm=1>

          </v-col>
        </v-row>
      </div>
    </v-container>
  </div> -->


<div  class = 'jaune'>
    <v-container>
      <span class="text-alice"><b>De la tête aux pieds et de la périphérie à la profondeur</b>, les fascias, membranes translucides qui enveloppent relient entre eux tous les éléments de notre organisme,
      <b>sont les tissus par excellence de l’adaptation</b>.</span>
    </v-container>

  </div>


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
            <span class="text-alice">Restaurer la sensibilité tissulaire lorsque le corps se désensibilise, et perd ainsi sa capacité à signaler tout dysfonctionnement</span>
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
