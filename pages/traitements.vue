<style>
#domaines-applications {
  background-color: #DEC3E8;
  height: auto;
  padding: 2%;
  z-index: -1;
  position: relative;
}

#title-traitement {
  font-size: 28px ;
  font-weight: 600;
  color: white;
}

.title-paragraph {
  font-size: 20px !important;
  font-weight: 600;
  color: #834B99;
  text-transform: uppercase;
  padding-top: 3em;
  padding-bottom: 3em;


}

#img-traitement {
  z-index: -1;
}

#hidden {
    z-index: -1;
    position: relative;
}

#pink {
  color: #C7287D
}
</style>


<template>
<div>

  <v-container>
  <div class='section-title'><span id='title'>DESCRIPTION DES SOINS</span></div>
    <div id="description-soins">
      <p id='pink'>Mon expérience m’a appris à utiliser le fascia, ce tissu conjonctif organisé en réseau, pour ne pas prendre systématiquement la douleur de façon frontale. </p>
      <p id='pink'>En cas de douleur intense ou diffuse, j’accorde la priorité à un relâchement général comme condition première, car <b>c’est à partir d’un état de détente que le corps va faire son office, se réparer, se soigner.</b></p>
      <p id='pink'>Certaines douleurs se résorbent en quelques séances, d’autres demandent plus de temps et résistent à l’amélioration des symptômes.
      </p>
      <p id='pink'>En effet, les accidents, les blessures, les stress répétés, les chocs, mais aussi les émotions non exprimées, les non-dits, s’inscrivent dans le corps provoquant une stase ou une douleur dont l’origine n’est pas toujours facile à
        décrypter. Pour atténuer ces <b>douleurs « réfractaires »</b>, j'ajoute à ma pratique corporelle mes compétences en psychologie.</p>
    </div>
</v-container>


  <div id="domaines-applications">
    <div class='section-title'><span id='title-traitement'>DOMAINES D'APPLICATIONS</span></div>
    <v-img id="" :src='require("~/assets/img/AliceSozzi_traitement@2x.png")' aspect-ratio="2.5" contain></v-img>
  </div>



  <div v-if="$device.isMobile">
  <v-container>
    <v-row justify="center" align="center" >
      <v-col cols=12   md=6 sm=1>
        <v-img id="img-traitement" :src='require("~/assets/img/AliceSozzi_douleur1@2x.png")' aspect-ratio="2" contain></v-img>
      </v-col>
      <v-col cols=12  md=6 sm=1>
        <span class='title-paragraph'> Une douleur liée à une émotion non exprimée.</span>
        <p>Le corps est souvent le témoin d'émotions qui n'ont pas pu être exprimées (non-dit, difficultés relationnelles).</p>
        <p>Lorsque sous la main je perçois l’éventualité d’un lien entre une tension et une émotion non-exprimée, j’encourage la personne à retrouver les évènements qui ont pu provoquer ce malaise. Ainsi, en exprimant son émotion, la personne libère
          également l’aspect physiologique.</p>
      <p><b>Le soin corporel que je propose s'adresse à la personne dans sa globalité en apportant un soulagement à plusieurs niveaux.</b></p>
      </v-col>
    </v-row>
</v-container>

<v-container>
    <v-row justify="center"  align="center" id = "hidden">
      <v-col cols=12  md=6 sm=1>
        <v-img id="corps-complice" :src='require("~/assets/img/home_text1@2x.png")' aspect-ratio="2" contain></v-img>
      </v-col>
      <v-col cols=12  md=6 sm=1>
        <span class='title-paragraph'> Une douleur sans douleur </span>
        <p>Lorsque le corps reçoit un choc physique ou émotionnel, il se crispe et se désensibilise. Cela le protège d’une douleur qui serait trop intense. Mais en même temps, il se prive de cette extraordinaire sensibilité perceptive qui fait que le corps dit, informe, alerte d’un dysfonctionnement.
        Dans ce cas de figure, l’absence de symptômes peut devenir problématique.</p>
        <p><b>Par mon approche corporelle, je resensibilise les tissus et contribue à la restauration de la capacité sensorielle. </b></p>
      </v-col>
    </v-row>
  </v-container>


  <v-container>
    <v-row  align="center" id = "hidden">
      <v-col cols=12 md=6 sm=1>
        <!-- <v-img id="img-traitement" :src='require("~/assets/img/AliceSozzi_douleur3@2x.png")' aspect-ratio="1.5" contain></v-img> -->
      </v-col>
      <v-col cols=12  md=6 sm=1>
        <span class='title-paragraph'>Une douleur sans choc</span>
        <p>L’origine de certaines difficultés vient du combat que la personne a pu livrer contre elle-même, en agissant à l’inverse de sa physiologie, en résistant à ses demandes, ses besoins (manque de sommeil, nourriture …).</p>
        <p>En contrariant régulièrement les fonctions naturelles, il en résultera bien souvent des stases, des blocages, des pertes d’énergie, de la fatigue supplémentaire, qui peuvent évoluer en symptômes douloureux diffus.</p>
        <p><b>La complicité avec son corps se tisse en écoutant les demandes du corps. Et lorsque celui-ci exprime un besoin, même minuscule, mais essentiel, il est important de lui répondre.</b></p>
      </v-col>
    </v-row>
  </v-container>


</div>



<div v-else-if="$device.isDesktop">
  <v-container>
    <v-row justify="center" align="center" id = "hidden">
      <v-col cols=12   md=6 sm=1>
        <v-img id="img-traitement" :src='require("~/assets/img/AliceSozzi_douleur3@2x.png")' aspect-ratio="1.4" contain></v-img>
      </v-col>
      <v-col cols=12  md=6 sm=1>
        <span class='title-paragraph'> Une douleur liée à une émotion non exprimée</span>
        <p>Le corps est souvent le témoin d'émotions qui n'ont pas pu être exprimées (non-dit, difficultés relationnelles).</p>
        <p>Lorsque sous la main je perçois l’éventualité d’un lien entre une tension et une émotion non-exprimée, j’encourage la personne à retrouver les évènements qui ont pu provoquer ce malaise. Ainsi, en exprimant son émotion, la personne libère
          également l’aspect physiologique.</p>
      <p><b>Le soin corporel que je propose s'adresse à la personne dans son entièreté en apportant un soulagement à plusieurs niveaux.</b></p>
      </v-col>
    </v-row>
</v-container>


<v-container>
    <v-row justify="center" align="center" id = "hidden">
      <v-col cols=12  md=6 sm=1>
        <span class='title-paragraph'> Une douleur sans douleur </span>
        <p>Lorsque le corps reçoit un choc physique ou émotionnel, il se crispe et se désensibilise. Cela le protège d’une douleur qui serait trop intense. Mais en même temps, il se prive de cette extraordinaire sensibilité perceptive qui fait que le corps dit, informe, alerte d’un dysfonctionnement.
        Dans ce cas de figure, l’absence de symptômes peut devenir problématique.</p>
        <p><b>Par mon approche corporelle, je resensibilise les tissus et contribue à la restauration de la capacité sensorielle. </b></p>
      </v-col>
      <v-col cols=12  md=6 sm=1>
        <v-img id="img-traitement" :src='require("~/assets/img/home_1@2x.png")' aspect-ratio="1.5" contain></v-img>
      </v-col>
    </v-row>
  </v-container>


  <v-container>
    <v-row justify="center" align="center" id = "hidden">
      <v-col cols=12 md=6 sm=1>
        <v-img  id="img-traitement" :src='require("~/assets/img/AliceSozzi_douleur1@2x.png")' aspect-ratio="2.3" contain></v-img>
      </v-col>
      <v-col cols=12  md=6 sm=1>
        <span class='title-paragraph'>Une douleur sans choc</span>
        <p>L’origine de certaines difficultés vient du combat que la personne a pu livrer contre elle-même, en agissant à l’inverse de sa physiologie, en résistant à ses demandes, ses besoins (manque de sommeil, nourriture etc.).</p>
        <p>En contrariant régulièrement les fonctions naturelles, il en résultera bien souvent des stases, des blocages, des pertes d’énergie, de la fatigue supplémentaire, qui peuvent évoluer en symptômes douloureux diffus.</p>
        <p><b>La complicité avec son corps se tisse en écoutant les demandes du corps. Et lorsque le corps exprime un besoin, même minuscule, mais essentiel, il est important de lui répondre.</b></p>

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
