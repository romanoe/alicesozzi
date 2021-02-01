<!-- Style -->
<style>
.footer-title {
  font-weight: bold;
  font-size: large;
}

.contact-container {
  display: flex;
  align-items: center;
}


.img-alice-footer {
  width: 30%;
  padding: 0 20px 0 20px;

}

.text-alice {
  color: #C7287D;
}


.theme--light.v-footer {
  background-color: transparent;
}

.row-footer {
  margin: 0 10% 0 10%;
  /* bottom-top :  */

}

.credits {
  height: 131px;
  background-color: rgb(152, 227, 213, 0.5);
  padding-left: 5%;
}

.credits span {
  color: #C7287D;
  font-size: 80%;
  margin-top: 20px;
}

.divider-footer {
  height: 21px;
  background-color: rgb(152, 227, 213, 0.5);

}

.asca {
  text-align:  center;
}


.v-footer {
  height: auto;
}

</style>


<!-- Template -->
<template>
<div>


  <v-footer absolute app>

      <v-row class="row-footer" justify="center">
        <v-spacer></v-spacer>
        <v-col cols='12' md = 3 sm = 1>
          <div class="contact-container">
            <img class='img-alice-footer' src='~/assets/img/AliceSozzi.png' />
            <span class="text-alice">
              <span class="footer-title">CONTACT</span><br> <br>
              <b>Alice Sozzi</b> <br>
              Chemin des Aubépines 23 <br>
              1004 Lausanne <br>
              021 648 76 12 <br>
              077 411 67 07</span>

          </div>
        </v-col>

        <v-col cols='12' md = 2 sm = 1>
          <span class="text-alice">
            <span class="footer-title">INFORMATIONS</span><br><br>
            Remboursé ASCA RME.
            Une séance dure environ 50 minutes.
            Il est conseillé de porter des vêtements comfortables puisque le traitement est généralement effectué par-dessus l’habillement.
          </span>
        </v-col>

        <v-col cols='12' class='asca' md = 7 sm = 1>
          <img src='~/assets/img/AliceSozzi_asca@2x.png' />
        </v-col>

      </v-row>
    <v-row class='credits'><span>©Cabinet de soins Alice Sozzi, 2021. Tous droits réservés. Design: Shaolin-design</span></v-row>



  </v-footer>






</div>
</template>


<!-- Script -->
<script>
export default {};
</script>
