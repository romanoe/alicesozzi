<script setup>
import { ref } from "vue";
import router from "../router";

let mobile = ref(false);

const isMobile = () => {
  mobile.value = screen.width <= 760 ? true : false;
  return mobile;
};

isMobile();
</script>

<template>
  <div>
    <!-- Menu desktop -->
    <div v-if="!mobile">
      <v-container>
        <router-link to="/">
          <div id="header">
            <v-row>
              <v-col cols="12" md="1" sm="1">
                <v-img
                  id="img-alice-header"
                  src="/img/AliceSozzi.webp"
                  aspect-ratio="1"
                  contain
                  alt="alice-sozzi-favicon"
                ></v-img>
              </v-col>
              <v-col cols="12" md="11" sm="1">
                <h2 class="text-alice header-title">
                  CABINET DE FASCIATHÉRAPIE ALICE SOZZI
                </h2>
                <span class="header-subtitle"
                  >FASCIATHÉRAPEUTE ET PSYCHOLOGUE, AGRÉE ASCA, RME</span
                >
                <div id="contact-block">
                  <span class="header-subtitle"
                    >Chemin des Aubépines 23 |
                  </span>
                  <span class="header-subtitle">1004 Lausanne | </span>
                  <span class="header-subtitle"
                    >021 648 7612 / 077 411 67 07</span
                  >
                </div>
              </v-col>
            </v-row>
          </div>
        </router-link>
      </v-container>

      <div class="d-none d-md-flex d-lg-flex">
        <div class="menu">
          <router-link
            v-for="(route, index) in router.options.routes"
            :key="index"
            :to="route.path"
            class="route"
          >
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-else-if="mobile" id="header">
      <v-app-bar :elevation="1" scroll-behavior="collapse elevate">
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn color="#c7287d" v-bind="props">
              <font-awsome-icon icon="fa-solid fa-bars" class="icon" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(route, index) in router.options.routes"
              :key="index"
            >
              <ul>
                <router-link :to="route.path">
                  <li>{{ route.name }}</li>
                </router-link>
              </ul>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-app-bar-title>
          <h2 class="header-title">ALICE SOZZI</h2>
          <div id="contact-block">
            <h4 class="subtitle-mobile">FASCIATHÉRAPEUTE ET PSYCHOLOGUE</h4>
            <h4 class="subtitle-mobile">AGRÉE ASCA, RME</h4>
          </div>
        </v-app-bar-title>
      </v-app-bar>
    </div>
  </div>
</template>

<!-- Style -->
<style>
.menu {
  text-align: center;
  width: 100%;
  background-color: rgba(231, 248, 245, 0.7);
  height: 44px;
  line-height: 44px;
  font-size: 1.1vw;
  letter-spacing: 0.15vw;
  font-weight: 800;
  z-index: 2;
}

.menu .route {
  text-decoration: none;
  color: #c7287d;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 5px;
  z-index: 1;
}

.header-subtitle {
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 0.09vw;
  color: #c7287d;
}

#contact-block {
  line-height: 1rem;
  display: block;
}

.title-mobile {
  font-weight: bold;
  font-size: 1rem;
}

.subtitle-mobile {
  font-weight: 300;
  font-size: 1.2rem;
}

#header {
  padding: 20px 20px 40px 20px;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.09vw;
  color: #c7287d;
}

.v-toolbar__content {
  background-color: rgba(255, 255, 255, 0.5) !important;
  height: 80px !important;
}
</style>
