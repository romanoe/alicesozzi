<style>
.citation {
  background-color: #FBF5EE;
  height: auto;
  text-align: center;
}

#ma-profession {
  color: #50C1A3;
  font-size: 30px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.two-col {
  margin : 4% 2% 2% 2%;
}

.section-title {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
}

table {
  width: 60%;
  text-align: left;
}

#cv {
  display: flex;
  justify-content: center;
}

.thin {
  font-weight: lighter;
}
</style>


<template>
<div>

  <div class = 'section-title'><span id='title'>MON PARCOURS</span></div>

  <!-- <div class='container'> -->
  <v-row justify = "center">
    <v-col cols = 12 md = 6 sm = 1>
      <p>Je pratique la fasciathérapie dans mon cabinet de consultation à Lausanne depuis 26 ans.</p>
        <p>La forme de thérapie que je pratique, également issue de ma formation de psychologue,  se base sur des savoir-faire liés au corps et à la relation à l’autre.</p>
        <p>Dans mon cursus de psychologie à l’Université de Genève, j’ai été attirée par les matières qui abordaient le corps, particulièrement l’enseignement du Pr. A. Bullinger et qui abordait le développement des 5 sens, chez l’enfant, de façon innovante.<p>
        <p>Continuer à approfondir la connaissance du corps m’enthousiasme toujours.
        Par ce biais corporel, j’ai expérimenté une autre façon d’interagir avec les personnes. J’ai développé des capacités à lire les indices que le corps donne, alors que la parole les tait.</p>
    </v-col>
    <v-col cols = 12 md = 2 sm = 1>
      <v-img id="img-cabinet" :src='require("~/assets/img/AliceSozzi_consultation@2x.png")' aspect-ratio="1" contain ></v-img>
    </v-col>
  </v-row>
<!-- </div> -->


  <div class='citation'>
    <v-row justify="center">
      <v-col cols=12 md=3 sm=1>
        <span id='ma-profession'>« Alors que je me destinais à la profession de psychothérapeute, un détour par le corps a fini par dévier ma route. »</span>
      </v-col>
      <v-col cols=12 md=7 sm=1>
        <v-img :src='require("~/assets/img/AliceSozzi_fascia@2x.png")' aspect-ratio="2" contain></v-img>
      </v-col>
    </v-row>
  </div>



  <div class = 'section-title'><span id='title'>MA FORMATION</span></div>

<div id = "cv">
  <table>
    <tr>
      <th><p><b>1983</b></p></th>
      <th><p class = 'thin'>Baccalauréat scientifique (Lausanne)</p></th>
    </tr>
    <tr>
      <th><p><b>1985</b></p></th>
      <th><p class = 'thin'>Brevet d’enseignement primaire (Ecole Normale de Lausanne)</p></th>
    </tr>

    <tr>
      <th><p><b>1990</b></p></th>
      <th><p class = 'thin'>Licence en psychologie (Université de Genève)</p></th>
    </tr>

    <tr>
      <th><p ><b>1990-1992</b></p></th>
      <th><p class = 'thin'> Psychologue stagiaire à Bienne au SPE</p></th>
    </tr>

    <tr>
      <th><p class = 'thin'><b>1993-1994</b></p></th>
      <th><p class = 'thin'>Psychologue à St-Imier et à Tavanne</p></th>
    </tr>


    <tr>
      <th><p><b>1995</b></p></th>
      <th><p class = 'thin'> Certificat de Fasciathérapie Méthode Danis Bois (Paris)</p></th>
    </tr>

    <tr>
      <th><p><b>1997</b></p></th>
      <th><p class = 'thin'> Diplôme de Fasciathérapie Méthode Danis Bois (Paris)</p></th>
    </tr>

    <tr>
      <th><p><b>2019</b></p></th>
      <th><p class = 'thin'>Attestation de pratique en Seïtai et Mouvement régénérateur</p></th>
    </tr>

    </table>
</div>



</div>
</template>


<script>
export default {
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
</script>
