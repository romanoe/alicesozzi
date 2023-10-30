<style>
.text-home-page {
  color: #834B99;
  font-size: 2.5rem;
  line-height: 1.2em;
  font-weight: 200;
}


.jaune {
  background-color: #F7ECDE;
  letter-spacing: 1.3px;
  color: #C7287D;
  text-transform: uppercase;
  opacity: 1;
  font-weight: 900;
  padding-top: 3vw;
  padding-bottom: 3vw;
  line-height: 3vh;
}

.jaune.desktop,
.jaune.laptop,
.jaune.tablet {
  font-size: 1.2vw;
}

.mes-actions {
  /*  */
  opacity: 0.8;
  height: auto;
  text-align: center;
  padding: 1em;

}

#img-actions {
  height: 150px;
}

.section-title {
  color: #C7287D;
  letter-spacing: 1.3px;
  font-weight: bold;
  font-size: 2.5rem;
}

.section-title.desktop,
.section-title.laptop,
.section-title.tablet {
  font-size: 3.5rem;
}

.section-title.mobile {
  font-size: 3.5rem;
}

.text-mes-actions {
  text-align: left;
  margin: auto;
  width: 80%;
}

.text-mes-actions.desktop,
.text-mes-actions.laptop,
.text-mes-actions.tablet {
  font-size: 3.5rem;
}

.texte-mes-actions.mobile {
  font-size: 3.5rem;
}


.intro {
  position: relative;
  margin: 6% auto 5% auto;

}


#corps-complice {
  z-index: -1;
}
</style>


<template>
  <div>


    <v-container>
      <div class="intro">
        <v-row justify="center" align="start">
          <v-col cols=12 md=5 sm=5> 
            <h1 id="title">LA FASCIATHÉRAPIE</h1>

            <p><span class='text-home-page'>La fasciathérapie soigne la douleur par un toucher subtil en procurant une
                détente profonde </span></p>
            <br>
            <p><span class='text-home-page'><b>Plus de 20 ans de pratique</b>
              </span></p>
              <br>

            <p><span class='text-home-page'><b>7 minutes de Lausanne Chauderon</b>
              </span></p>
          </v-col>
          <v-col cols=12 md=7 sm=7>
            <v-img id="img-cabinet" src='/img/home_AliceSozzi@2x.webp' aspect-ratio="1.5" contain alt="alice-sozzi"></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class='jaune'>
      <v-container>
        <v-row>
          <v-col cols=12 md=4 sm=6>
            <v-img src='/img/Homme_alice_psy.webp' aspect-ratio="2.5" contain alt="alice-psy"></v-img>
          </v-col>
          <v-col cols=12 md=5 sm=6>
            <h2>QU'EST-CE QU'UN FASCIA?</h2>
            <br>
            <br>
            <span class="text-alice">De la tête aux pieds et de la périphérie à la profondeur, les fascias, membranes
              translucides qui enveloppent et relient entre eux tous les éléments de notre organisme,
              sont les tissus par excellence de l’adaptation.</span>
          </v-col>
          <v-col cols=12 md=3 sm=6>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Mes actions -->
    <div class='mes-actions'>
      <h2 class='section-title'>MES ACTIONS</h2>
      <br>
      <br>
      <br>
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" src='/img/AliceSozzi_equilibre@2x.webp' aspect-ratio="1" contain alt="equilibre"></v-img>
            <br>
            <div class='text-mes-actions'>
              <span class="text-alice texte-mes-actions">Rééquilibrer les fonctions et les propriétés des tissus,
                c’est-à-dire la physiologie, là où elle a été contrariée, afin d'alléger les tensions, défatiguer, gagner
                en vitalté. </span>
            </div>
          </v-col>
          <v-col cols=12 md=4 sm=1 xs=1>
            <v-img id="img-actions" src='/img/AliceSozzi_toucher@2x.webp' aspect-ratio="1" contain alt="toucher"></v-img>
            <br>
            <div class='text-mes-actions'>
              <span class="text-alice texte-mes-actions">Proposer un toucher spécifique, en me basant sur les propriétés
                même des fascias afin de soigner le corps après des stress répétés, des chocs émotionnels, des blessures
              </span>
            </div>
          </v-col>
          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" src='/img/AliceSozzi_soulager@2x.webp' aspect-ratio="1" contain alt="soulager"></v-img>
            <br>
            <div class='text-mes-actions'>
              <span class="text-alice texte-mes-actions ">Soulager les douleurs et désenflammer. Retrouver sa mobilité et
                une forme d’aisance corporelle en sollicitant la capacité naturelle du corps à se régénérer</span>
            </div>
          </v-col>
        </v-row>
      </v-container>



      <v-spacer></v-spacer>


      <v-container>
        <v-row justify="center">
          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" src='/img/AliceSozzi_fatigue@2x.webp' aspect-ratio="1" contain alt="fatigue"></v-img>
            <br>
            <div class='text-mes-actions'>
              <span class="text-alice texte-mes-actions ">Restaurer la sensibilité tissulaire lorsque le corps se
                désensibilise, et perd ainsi sa capacité à signaler tout dysfonctionnement</span>
            </div>
          </v-col>

          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" src='/img/AliceSozzi_restaurer@2x.webp' aspect-ratio="1" contain alt="restaurer"></v-img>
            <br>
            <div class='text-mes-actions'>
              <span class="text-alice texte-mes-actions ">Réorienter la personne vers une meilleure perception sensorielle
                d’elle-même pour mieux « habiter » son corps</span>
            </div>
          </v-col>

          <v-col cols=12 md=4 sm=1>
            <v-img id="img-actions" src='/img/AliceSozzi_questionner@2x.webp' aspect-ratio="1" contain alt="questionner"></v-img>
            <br>
            <div class='text-mes-actions'>
              <span class="text-alice texte-mes-actions ">Amener la personne à se questionner sur les comportements à
              l’origine des tensions et douleurs</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</div></template>



