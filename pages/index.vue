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
height: 1164px;
text-align: center;


}

#title {
  color: #C7287D;
  font-size: 40px;
  font-weight: 600;

}

</style>


<template>
<div>
  <v-row class="custom-row" >
    <img src='~/assets/img/home_text1@2x.png' />
  </v-row>

  <v-row class="custom-row" >

    <v-col cols='5'>
      <span class = 'text-home-page'>Par le toucher, procurer une détente profonde du corps et soigner la douleur en sollicitant la capacité naturelle du corps à se régénérer…</span>
      <br>
      <br>
      <br>
      <img id = 'img-cabinet' src='~/assets/img/home_1@2x.png' />


    </v-col >

    <v-col cols='7' >
      <img id = 'img-cabinet' src='~/assets/img/home_AliceSozzi@2x.png' />
      <br>
      <br>
      <br>

      <span class = 'text-home-page'>… Et par l’entretien psychologique, comprendre l’origine de la douleur et prendre conscience de l’impact sur le corps et de la façon de penser.
</span>
    </v-col>

  </v-row>

  <div class = 'mes-actions'>
      <span id = 'title'>MES ACTIONS</span>

  </div >

</div>

  </v-row>





</div>
</template>



<script>
export default {
  layout: 'default'
}
</script>
