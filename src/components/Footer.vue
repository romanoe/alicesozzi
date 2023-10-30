<script setup>
import { ref } from 'vue';
let mobile = ref(false);


const isMobile = () => {
  mobile.value = screen.width <= 760 ? true : false;
  return mobile;
}

isMobile();

</script>

<!-- Template -->
<template>
  <div>
    <v-footer inset height="200" width="auto">
      <v-row class="row-footer" align="center" no-gutters>
        <v-col cols=12 md=2 sm=1 v-if="!mobile">
          <v-img src='/img/AliceSozzi.webp' aspect-ratio="3.5" contain alt="alice-sozzi-favicon"></v-img>
        </v-col>
        <v-col cols=12 md=5 sm=2 xs=1>
          <span class="text-alice">
            <span class="footer-title">CONTACT</span><br>
            <b>Alice Sozzi</b> <br>
            Chemin des Aubépines 23 <br>
            1004 Lausanne <br>
            021 648 76 12 <br>
            077 411 67 07
          </span>
        </v-col>
        <v-col cols=12 md=5 sm=2 xs=1>
          <v-img src='/img/AliceSozzi_asca@2x.webp' aspect-ratio="11" contain alt="asca-rme"></v-img>
        </v-col>

        <div class="credits">
          <span>©Cabinet de fasciathérapie Alice Sozzi, 2023. Tous droits réservés. Design: Shaolin-design</span>
        </div>
      </v-row>
    </v-footer>
  </div>
</template>


<!-- Style -->
<style>
.footer-title {
  font-weight: bold;
  font-size: large;
}


.v-footer {
  background-color: transparent !important;
  margin-top: 4rem;
  z-index: 2
}

.row-footer {
  padding-top: 5vh;
  border-top: 21px solid rgb(152, 227, 213, 0.5);
  background-color: transparent;


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



</style>



