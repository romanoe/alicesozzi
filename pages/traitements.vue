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
  <div id="domaines-applications">
    <div class='section-title'><span id='title-traitement'>DOMAINES D'APPLICATIONS</span></div>
    <v-img id="" :src='require("~/assets/img/AliceSozzi_traitement@2x.png")' aspect-ratio="2.5" contain></v-img>
  </div>

  <div class='section-title'><span id='title'>DESCRIPTION DES SOINS</span></div>
  <div class="container">
    <div id="description-soins">
      <p id='pink'>Mon expérience m’a appris à utiliser le fascia, ce tissu conjonctif organisé en réseau, pour ne pas prendre systématiquement la douleur de façon frontale. </p>
      <p id='pink'>Je me suis aperçue que, c’est la finesse d’un toucher, parfois délicat, voire même extrêmement ténu, qui va atténuer les symptômes.</p>
      <p id='pink'>En cas de douleur intense ou diffuse, j’accorde la priorité à un relâchement général comme condition première, car c’est à partir d’un état de détente que le corps va faire son office, se réparer, se soigner.</p>
      <p id='pink'>Certaines douleurs se résorbent en quelques séances, d’autres demandent plus de temps et résistent à l’amélioration des symptômes. Pour atténuer ces douleurs « réfractaires », j’utilise également à mes compétences en psychologie.
      </p>
      <p id='pink'>En effet, les accidents, les blessures, les stress répétés, les chocs, mais aussi les émotions non exprimées, les non-dits, s’inscrivent dans le corps provoquant une stase ou une douleur dont l’origine n’est pas toujours facile à
        décrypter.</p>
    </div>
  </div>

  <div class='two-col'>
    <v-row justify="center">
      <v-col cols=12 md=5 sm=1>
        <v-img :src='require("~/assets/img/AliceSozzi_douleur1@2x.png")' aspect-ratio="2" contain></v-img>
      </v-col>
      <v-col cols=12 md=5 sm=1>
        <span class='title-paragraph'> Une douleur liée à une émotion non exprimée</span>
        <p>Le corps témoigne de bien des émotions qui ont bousculé la personne et qu’elle n’a pas pu exprimer. ( non-dit, difficultés relationnelles)</p>
        <p>Lorsque sous la main je perçois l’éventualité, d’un lien entre une tension et une émotion non-exprimée, j’encourage la personne à retrouver les évènements qui ont pu provoquer ce malaise. Ainsi, en exprimant son émotion, la personne libère
          egalement l’aspect physiologique.</p>
      <p><b>Le soin corporel que je propose soutient ce processus en apportant un soulagement à plusieurs niveaux.</b></p>
      </v-col>
    </v-row>
  </div>


  <div class='two-col'>
    <v-row justify="center">

      <v-col cols=12 md=5 sm=1>
        <span class='title-paragraph'> Une douleur sans douleur </span>
        <p>Lorsque le corps reçoit un choc physique ou émotionnel, il se crispe et se désensibilise. Cela le protège d’une douleur qui serait trop intense. Mais en même temps, il se prive de cette extraordinaire sensibilité perceptive qui fait que le corps dit, informe, alerte d’un dysfonctionnement.
        Dans ce cas de figure, l’absence de symptômes peut devenir problématique.</p>
        <p><b>Par mon approche corporelle, je resensibilise les tissus et contribue à la restauration de la capacité sensorielle. </b></p>
      </v-col>
      <v-col cols=12 md=5 sm=1>
        <v-img :src='require("~/assets/img/AliceSozzi_douleur2@2x.png")' aspect-ratio="2" contain></v-img>
      </v-col>

    </v-row>
  </div>



    <div class='two-col'>
    <v-row justify="center">
      <v-col cols=12 md=5 sm=1>
        <v-img :src='require("~/assets/img/AliceSozzi_douleur3@2x.png")' aspect-ratio="2" contain></v-img>
      </v-col>
      <v-col cols=12 md=5 sm=1>
        <span class='title-paragraph'>Une douleur sans choc ou la physiologie contrariée</span>

        <p>Il arrive que le mental soit un peu sourd aux témoignages du corps ou qu’il ait pris des habitudes rigides qu’il croit protectrices mais dont il a tout intérêt à se délivrer.
        Le lien du corps vers la pensée se fait presque sans être perçu, mais devient une aide précieuse qui permet ce désencombrement du mental. </p>

        <p>Je m’adresse directement au corps, je choisis de partir d’un état de détente pour obtenir une résolution des choses également du point de vue mental.</p>

        <p><b>Je cherche avec la personne comment elle peut utiliser son mental au service de l’amélioration de sa santé ou une diminution de sa douleur.</b></p>

      </v-col>
    </v-row>
  </div>


</div>
</template>
