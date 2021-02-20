<!-- Style -->
<style>
.footer-title {
  font-weight: bold;
  font-size: large;
}


.theme--light.v-footer {
  background-color: transparent;
}

.row-footer {
  /* padding: 0 10% 0 10%; */
  border-top: 21px solid rgb(152, 227, 213, 0.5);
}

.credits {
  background-color: rgb(152, 227, 213, 0.5);
  width: 100%;
  padding: 15px;
}


.credits span {
  color: #C7287D;
  font-size: 80%;
}

.asca {
  text-align: center;
}


.text-alice {
  color: #C7287D;
}


#alice-footer {
  /* margin-right: -20px;  */
}
</style>


<!-- Template -->
<template>
<div>
  <v-footer absolute app inset height="200" width="auto">

    <v-row class="row-footer" justify="center" align="center" no-gutters>
      <v-col cols=12 md=2 sm=1 v-if="$device.isDesktop">
      <v-img :src='require("~/assets/img/AliceSozzi.png")' aspect-ratio=3 contain></v-img>
      </v-col>
      <v-col cols=12 md=5 sm=1 xs=1>
        <span class="text-alice">
          <span class="footer-title">CONTACT</span><br> <br>
          <b>Alice Sozzi</b> <br>
          Chemin des Aubépines 23 <br>
          1004 Lausanne <br>
          021 648 76 12 <br>
          077 411 67 07
        </span>
      </v-col>
      <v-col cols=12 md=5 sm=1>
        <v-img :src='require("~/assets/img/AliceSozzi_asca@2x.png")' aspect-ratio="7" contain></v-img>
      </v-col>

      <div class= "credits">
        <span>©Cabinet de soins Alice Sozzi, 2021. Tous droits réservés. Design: Shaolin-design</span>
      </div>
    </v-row>
  </v-footer>


</div>
</template>


<!-- Script -->
<script>
export default {};
</script>
