<style>
.custom-row {
  margin: 2% 10% 0 10%;
}

.text-home-page {
  color: #834B99;
  font-weight: 300;
  font-size: 40px;
}


#img-cabinet {
  height: 520px;
}

.mes-actions {
  background-color: #F7ECDE;
  height: auto;
  text-align: center;
  padding: 3% 0 3% 0;

}

#title {
  color: #C7287D;
  font-size: 40px;
  font-weight: 600;

}

.text-mes-actions {
  text-align: left;
  margin: auto;
  width: 80%;
}
</style>


<template>
<div>
  <v-row class="custom-row">
    <img src='~/assets/img/home_text1@2x.png' />
  </v-row>

  <v-row class="custom-row">

    <v-col cols='5'>
      <span class='text-home-page'>Par le toucher, procurer une détente profonde du corps et soigner la douleur en sollicitant la capacité naturelle du corps à se régénérer…</span>
      <br>
      <br>
      <br>
      <img id='img-cabinet' src='~/assets/img/home_1@2x.png' />


    </v-col>

    <v-col cols='7'>
      <img id='img-cabinet' src='~/assets/img/home_AliceSozzi@2x.png' />
      <br>
      <br>
      <br>

      <span class='text-home-page'>… Et par l’entretien psychologique, comprendre l’origine de la douleur et prendre conscience de l’impact sur le corps et de la façon de penser.
      </span>
    </v-col>

  </v-row>

  <div class='mes-actions'>
    <span id='title'>MES ACTIONS</span>

    <v-row class="custom-row">
      <v-col>
        <img src='~/assets/img/AliceSozzi_equilibre@2x.png' />
        <div class='text-mes-actions'>
          <span class="text-alice">Rééquilibrer les fonctions et les propriétés des tissus et organes, c’est-à-dire la physiologie, là où elle a été contrariée.</span>
        </div>
      </v-col>

      <v-col>
        <img src='~/assets/img/AliceSozzi_toucher@2x.png' />
        <div class='text-mes-actions'>
          <span class="text-alice">Proposer un toucher spécifique, en me basant sur les propriétés même des fascias (élasticité, rythmicité, réversibilité : capacité à se crisper et à se décrisper…) </span>
        </div>
      </v-col>

      <v-col>
        <img src='~/assets/img/AliceSozzi_soulager@2x.png' />
        <div class='text-mes-actions'>
          <span class="text-alice">Soulager les douleurs et désenflammer. Retrouver sa mobilité et une forme d’aisance et de bien-être corporel.</span>
        </div>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row class="custom-row">
      <v-col>
        <img src='~/assets/img/AliceSozzi_fatigue@2x.png' />
        <div class='text-mes-actions'>
          <span class="text-alice">Restaurer la sensibilité tissulaire lorsque le corps est désensibilisé et a perdu sa capacité d’alerte.</span>
        </div>
      </v-col>

      <v-col>
        <img src='~/assets/img/AliceSozzi_restaurer@2x.png' />
        <div class='text-mes-actions'>
          <span class="text-alice">Réorienter la personne vers une meilleure perception sensorielle d’elle-même pour mieux « habiter » son corps.</span>
        </div>
      </v-col>

      <v-col>
        <img src='~/assets/img/AliceSozzi_questionner@2x.png' />
        <div class='text-mes-actions'>
          <span class="text-alice">Gagner une plus grande souplesse des fascias, et amener les personnes à se questionner sur les comportements à l’origine des tensions et douleurs.</span>
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
