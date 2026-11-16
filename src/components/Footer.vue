<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();
const year = new Date().getFullYear();
</script>

<!-- Template -->
<template>
  <v-footer class="site-footer">
    <v-container class="footer-content">
      <v-row align="center" justify="center">
        <v-col v-if="!smAndDown" cols="12" md="2" class="footer-col">
          <v-img
            src="/img/AliceSozzi.webp"
            class="footer-portrait"
            contain
            alt="alice-sozzi-favicon"
          ></v-img>
        </v-col>

        <v-col cols="12" md="5" class="footer-col">
          <address class="footer-contact text-alice">
            <span class="footer-title">CONTACT</span>
            <b>Alice Sozzi</b>
            <span>Chemin des Aubépines 23</span>
            <span>1004 Lausanne</span>
            <a href="tel:+41216487612">021 648 76 12</a>
            <a href="tel:+41774116707">077 411 67 07</a>
          </address>
        </v-col>

        <v-col cols="12" md="5" class="footer-col">
          <v-img
            src="/img/AliceSozzi_asca@2x.webp"
            class="footer-labels"
            contain
            alt="asca-rme"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <div class="credits">
      <span>
        ©Cabinet de fasciathérapie Alice Sozzi, {{ year }}. Tous droits réservés.
        Design: Shaolin-design
      </span>
    </div>
  </v-footer>
</template>

<!-- Style -->
<style>
.site-footer.v-footer {
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  margin-top: 4rem;
  background-color: transparent !important;
  border-top: 21px solid rgba(152, 227, 213, 0.5);
  z-index: 2;
}

.footer-content {
  padding-block: 2.5rem;
}

.footer-col {
  display: flex;
  justify-content: center;
}

.footer-portrait {
  width: 80px;
  flex: 0 0 auto;
}

.footer-labels {
  width: 100%;
  max-width: 300px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-style: normal;
  line-height: 1.4;
}

.footer-contact a {
  color: inherit;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

.footer-title {
  font-weight: bold;
  font-size: large;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.credits {
  background-color: rgba(152, 227, 213, 0.5);
  width: 100%;
  padding: 15px;
  text-align: center;
}

.credits span {
  color: #c7287d;
  font-size: 80%;
}

.text-alice {
  color: #c7287d;
}

@media (max-width: 959px) {
  .footer-contact {
    align-items: center;
    text-align: center;
  }
}
</style>
