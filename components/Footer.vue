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



.theme--light.v-footer {
  background-color: transparent;
}

.row-footer {
  padding: 0 10% 0 10%;
  border-top :  21px solid rgb(152, 227, 213, 0.5);
}

.credits {
  background-color: rgb(152, 227, 213, 0.5);
  padding-left: 5%;


}

.credits-container {
  text-align: left;
}

.credits span {
  color: #C7287D;
  font-size: 80%;
  margin-top: 20px;
}



.asca {
  text-align: center;
}


.v-footer {
  height: auto;
}

.text-alice {
  color: #C7287D;
}
</style>


<!-- Template -->
<template>
<div>




  <v-footer absolute app>
    <v-row class="row-footer" justify="center">
      <v-spacer></v-spacer>
      <v-col cols='12' md=5 sm=1>
        <div class="contact-container">
          <img class='img-alice-footer' src='~/assets/img/AliceSozzi.png' />
          <span class="text-alice">
            <span class="footer-title">CONTACT</span><br> <br>
            <b>Alice Sozzi</b> <br>
            Chemin des Aubépines 23 <br>
            1004 Lausanne <br>
            021 648 76 12 <br>
            077 411 67 07
          </span>
        </div>
      </v-col>
      <v-col cols='12' class='asca' md=6 sm=1>
        <img src='~/assets/img/AliceSozzi_asca@2x.png' />
      </v-col>
    </v-row>

    <v-row class='credits'>
      <v-col cols='12' md=12 sm=1>
      <span>©Cabinet de soins Alice Sozzi, 2021. Tous droits réservés. Design: Shaolin-design</span>
    </v-col>

</v-row>



</v-footer>


</div>
</template>


<!-- Script -->
<script>
export default {};
</script>
