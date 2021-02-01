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

</style>


<template>


<div class = 'citation'>

<v-row justify = "center">

<v-col cols = 12 md = 3 sm = 1>
<span id='ma-profession'>« Alors que je me destinais à la profession de psychothérapeute, un détour par le corps a fini par dévier ma route. »</span>
</v-col>

<v-col cols = 12  md = 7 sm = 1>
  <v-img  :src='require("~/assets/img/AliceSozzi_fascia@2x.png")' aspect-ratio="1" contain></v-img>

</v-col>

</v-row>



</div>






</template>
